if (navigator.onLine) {
  fetch("https://api.covid19api.com/total/country/nepal")
    .then((response) => response.json())
    .then((data) => {
      data = data.reverse();
      document.getElementById("active").innerText = data[0].Active;
      document.getElementById("death").innerText = data[0].Deaths;
      document.getElementById("confirmed").innerText = data[0].Confirmed;

      console.log(data[0]);
    });
} else {
  document.getElementById("body").innerHTML = "";
  document.write("No internet Connection");
}
