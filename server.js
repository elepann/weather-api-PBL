const app = require('./app.js');
require('dotenv').config();
const port = process.env.PORT;

//Server Online
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

