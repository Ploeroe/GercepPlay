Cara saya melakukan clone repository,

1. Buat File baru dan jalankan
   $ npx create-next-app -e with-tailwindcss gercepplay

2. cd gercepplay
3. Masukkan semua data repository kedalam gercepplay. (hal ini kita lakukan untuk mendapatkan nodemodule dsbnya)
4. npm run dev
5. buat .env.local
6. masukkan data
   NEXTAUTH_URL=(URL ex.Localhost:3000)
   NEXT_PUBLIC_CLIENT_SECRET=(SECRET ID SPOTIFY)
   NEXT_PUBLIC_CLIENT_ID=(CLIENT ID SPOTIFY)
   JWT_SECRET=some_super_secret_value
6. Apabila terjadi error https://nextjs.org/docs/messages/module-not-found
   lakukan
   $ npm install swr
7. Lakukan
   $ npm install spotify-web-api-node
8. Untuk memainkan lagu, dibutuhkan akun spotify (dinyalakan ditempat lain)
   seperti : https://open.spotify.com

^^^ APABILA TIDAK MEMBUKA ^^^

AKAN ERROR SEPERTI INI:
Details: Player command failed: No active device found NO_ACTIVE_DEVICE.

9. Akun yang premium yang dapat digunakan akan tersedia pada laporan pti uas 2021 yang hanya akan aktif selama 1 bulan.
