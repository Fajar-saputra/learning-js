fetch('https://reqres.in/api/login', {
  method: 'POST', // 1. Gunakan POST karena kita ingin mengirim data login
  headers: {
    'Content-Type': 'application/json',     // 2. Memberitahu server bahwa data dikirim dalam format JSON
    'x-api-key': 'reqres-free-v1',          // 3. API Key wajib ditambahkan untuk autentikasi awal
  },
  body: JSON.stringify({
    email: 'eve.holt@reqres.in',            // 4. Email sesuai yang diminta oleh dokumentasi API
    password: 'cityslicka',                 // 5. Password juga harus sesuai agar berhasil
  }),
})
  .then(res => res.json())                  // 6. Parsing response dari server ke format JSON
  .then(data => {
    console.log('✅ DATA:', data);          // 7. Menampilkan seluruh response (debug)
    console.log('🔑 Token:', data.token);   // 8. Mengakses token dari response
  })
  .catch(err => console.error('❌ Login gagal:', err)); // 9. Menangani error jika request gagal
