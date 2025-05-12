document.getElementById("search").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const apiKey = "API_KEY"; // Ganti dengan API key Anda
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById("result");
      result.innerHTML = `
        <h3>Cuaca di ${data.location.name}</h3>
        <p>Suhu: ${data.current.temp_c}°C</p>
        <p>Kondisi: ${data.current.condition.text}</p>
      `;
    })
    .catch(error => {
      console.error("Terjadi kesalahan:", error);
    });
});
