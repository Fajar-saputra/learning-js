// Data dummy (gunakan data daftarSD yang sudah kita buat sebelumnya atau buat yang baru jika perlu)
const daftarSD = [
    { id: 1, nama: 'SDN Harapan 1 Jakarta', alamat: 'Jl. Melati No. 5, Jakarta', kota: 'Jakarta', jumlahSiswa: 350, tahunBerdiri: 1995 },
    { id: 2, nama: 'SD Swasta Maju Jaya', alamat: 'Jl. Anggrek No. 10, Surabaya', kota: 'Surabaya', jumlahSiswa: 420, tahunBerdiri: 2002 },
    // ... tambahkan beberapa data lain jika mau
  ];
  
  // Fungsi simulasi fetch
  function fakeFetch(url) {
    return new Promise((resolve, reject) => {
      // Simulasi waktu tunggu (misalnya 1 detik)
      setTimeout(() => {
        // Di sini kita bisa menambahkan logika untuk menangani URL yang berbeda jika perlu
        if (url === '/api/sekolah') {
          // Simulasi respons berhasil
          resolve({
            ok: true,
            status: 200,
            json: () => Promise.resolve(daftarSD), // Mengembalikan Promise yang resolve dengan data JSON
          });
        } else {
          // Simulasi respons gagal (misalnya URL tidak dikenali)
          reject('Error: URL tidak ditemukan');
        }
      }, 1000);
    });
  }
  
  // Penggunaan fakeFetch
  fakeFetch('/api/sekolah')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data sekolah berhasil diterima:', data);
      // Di sini kamu bisa melakukan sesuatu dengan data sekolah, misalnya menampilkannya di UI
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      // Di sini kamu bisa menangani error, misalnya menampilkan pesan error ke pengguna
    });
  
  // Contoh penggunaan dengan URL yang salah untuk menguji bagian .catch()
  fakeFetch('/api/sekolah/detail/123')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data detail sekolah:', data);
    })
    .catch(error => {
      console.error('Terjadi kesalahan (URL salah):', error);
    });