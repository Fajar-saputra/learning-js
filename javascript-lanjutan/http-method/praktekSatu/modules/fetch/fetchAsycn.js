async function login() {
  const url = 'https://reqres.in/api/login';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }),
    });

    const data = await response.json(); // parsing JSON dari response
    console.log('✅ DATA:', data);
    console.log('🔑 Token:', data.token);

  } catch (error) {
    console.error('❌ Login gagal:', error); // tangani error jaringan atau fetch
  }
}

login(); // jalankan fungsi async-nya
