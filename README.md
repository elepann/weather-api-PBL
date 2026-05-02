🌤️ Weather API with Redis Caching
Proyek ini adalah implementasi dari tantangan Weather API di roadmap.sh. API ini berfungsi untuk mengambil data cuaca dari pihak ketiga dan menggunakan Redis sebagai sistem caching untuk meningkatkan performa dan mengurangi beban request ke API eksternal.

🚀 Fitur Utama
Weather Fetching: Mengambil data cuaca real-time berdasarkan nama kota.

Redis Caching: Jika data kota yang sama diminta kembali, API akan mengambilnya dari Redis (Cache Hit) alih-alih melakukan HTTP request ulang.

Fast Response: Mengurangi latensi secara signifikan dengan menyimpan data di memori (RAM).

Automatic Expiration: Data di cache memiliki waktu kadaluarsa (TTL) agar informasi cuaca tetap akurat.

🛠️ Tech Stack
Runtime: Node.js

Framework: Express.js

HTTP Client: Axios

Database (Cache): Redis

Weather Provider: Visual Crossing Weather API (atau API lain yang kamu gunakan)

🏗️ Arsitektur Logika
Client mengirimkan permintaan cuaca kota tertentu melalui Axios.

Server mengecek apakah data kota tersebut ada di Redis.

Cache Hit: Jika ada, data dikirim langsung dari Redis ke Client (Sangat Cepat).

Cache Miss: Jika tidak ada, Server memanggil Third-party API, menyimpan hasilnya ke Redis, lalu mengirimkannya ke Client.

📋 Prasyarat
Sebelum menjalankan projek ini, pastikan kamu sudah menginstal:

Node.js & npm

Redis Server (Local atau Docker)
