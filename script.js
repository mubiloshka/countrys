let cardsContainer = document.getElementById('cardsContainer');
let searchInput = document.getElementById('searchInput');
let modeToggle = document.getElementById('modeToggle');
let regionFilter = document.getElementById('regionFilter');


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    function renderCards(countries) {
      cardsContainer.innerHTML = '';
      countries.forEach(country => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${country.flags.png}" alt="" class="img" />
          <h2 class="pi">${country.name.common}</h2>
          <p class="pi"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p class="pi"><strong>Region:</strong> ${country.region}</p>
          <p class="pi"><strong>Capital:</strong> ${country.capital}</p>
        `;
        cardsContainer.appendChild(card);
      });
    }

    renderCards(data);

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase().trim();
      const filtered = data.filter(country =>
        country.name.common.toLowerCase().includes(searchValue)
      );
      renderCards(filtered);
    });
  });

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  const modeIcon = document.querySelector(".mode-icon");
  const modeText = document.querySelector(".mode-text");

if (isDark) {
    modeIcon.textContent = "☀️";         
    modeText.textContent = "Light Mode"; 
  } else {
    modeIcon.textContent = "🌙";         
    modeText.textContent = "Dark Mode";  
  }
}