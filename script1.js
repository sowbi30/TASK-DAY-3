const flagsContainer = document.getElementById("flags-container");

fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const flagElement = document.createElement("img");
      flagElement.src = country.flags[0];
      flagElement.alt = country.name;
      flagsContainer.appendChild(flagElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });