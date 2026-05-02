const client = require('../config/redis.js');
const axios = require('axios');
const weatherCodes = require('../config/weatherCode.js');

const weatherSearch = async (req, res) => {
    //ngambil query
    const { cname } = req.query;
    //axios hit 3rd party API
    try {
        const value = await client.get(cname);
        if(!value){
            //fetching data from third party api
            const geo = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cname}&count=1`);
            const { population, latitude, longitude } = geo.data.results[0];
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const currentWeather = response.data.current_weather;
            const condition = weatherCodes[currentWeather.weathercode];
            const { time, temperature, windspeed, winddirection } = currentWeather;

            const readableData = {
                name: cname,
                population: population,
                time: time,
                temperature: temperature,
                windspeed: windspeed,
                winddirection: winddirection,
                weather: condition
            };

            res.status(200).json({
                data: readableData,
                success: true,
                message: 'sukses fetch data dari third party api'
            })

            await client.set(cname, JSON.stringify(readableData));
        }else {
            res.status(200).json({
                data: JSON.parse(value),
                success: true,
                message: 'sukses ambil data dari cache'
            })
        }
    }catch(error){
        throw error;
    };
}

module.exports = { weatherSearch }

//alur:
// 1. cek dlu di cache ada data dengan key cname gak ?
// 2. kalo ada kirim ke luar kalo gak ada fetch 3rd party