// url : 02c5566d204348788d414732250905

fetch("https://api.weatherapi.com/v1/current.json?key=02c5566d204348788d414732250905&q=Jakarta")
  .then(res => res.json())
  .then(data => {
    console.log("Lokasi:", data.location.name);
    console.log("Suhu (C):", data.current.temp_c);
    console.log("Kondisi:", data.current.condition.text);
  })
  .catch(err => console.error("Error:", err));
