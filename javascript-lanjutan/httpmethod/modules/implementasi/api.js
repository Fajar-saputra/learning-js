// api.js
export async function fetchUsers(page = 1, apiKey = 'reqres-free-v1') {
  try {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`, {
      headers: {
        'x-api-key': apiKey,
      },
    });
    
    if (!res.ok) throw new Error('Gagal mengambil data!');
    
    return res.json();  // kembalikan data dari response
  } catch (err) {
    console.error('❌ Error:', err);
    throw err;  // lempar error agar bisa ditangani di tempat lain
  }
}

export function Testing() {
    console.log("Testing dari api.js");
}
