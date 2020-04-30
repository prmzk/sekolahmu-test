# sekolahmu-test Back-end 2
Untuk menjalankan server (pastikan sudah difolder '/backend2'):
1. install node modules dengan </br>
<code>npm install</code>

2. install modul sequelize-cli (apabila belum) dengan </br>
<code>npm install -g sequelize-cli</code>

3. Config database masih dicantumkan secara manual sehingga harus diganti manual, ganti username dan password database sesuai dengan konfigurasi anda di 'config/config.json'

4. Buat database dan migrasi dengan </br>
<code>sequelize db:create</code> </br>
<code>sequelize db:migrate</code>

5. Jalankan app.js dengan </br>
<code>node app.js</code> </br>

## Dokumentasi REST-API
- <code>GET 'user/'</code> -> menampilkan list seluruh user
- <code>POST 'user/register/'</code> -> register user (email, password, passwordConfirm, name)
- <code>POST 'user/login/'</code> -> login user dengan password (email, password)
- <code>POST 'user/loginOtp/'</code> -> login user dengan password (email, otpKey)
- <code>PUT 'user/:id/'</code> -> update data user sesuai id
- <code>DELETE 'user/:id/'</code> -> delete user sesuai id

## Notes
OTP key dikirim sebagai respon pada saat register, belum dikirim melalui email. </br>
Data pada model User: 
- id, email, password, name -> mandatory
- otpKey -> untuk validasi key OTP


