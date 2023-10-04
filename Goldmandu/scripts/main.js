const darkModeButton = document.getElementById('dark-mode-btn');
const darkModeIcon = document.getElementById('dark-mode-icon');
const dateElement = document.querySelector('.date');
const fineGoldTolaElement = document.querySelector('.fine-gold .tola');
const fineGoldGramElement = document.querySelector('.fine-gold .gram');
const tejabiGoldTolaElement = document.querySelector('.tejabi-gold .tola');
const tejabiGoldGramElement = document.querySelector('.tejabi-gold .gram');
const silverTolaElement = document.querySelector('.silver .tola');
const silverGramElement = document.querySelector('.silver .gram');

function toggleDarkModeIcon() {
    if (darkModeIcon.getAttribute('src') === 'assets/images/moon.png') {
        darkModeIcon.setAttribute('src', 'assets/images/sun.png');
    } else {
        darkModeIcon.setAttribute('src', 'assets/images/moon.png');
    }
}

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeIcon();
});
fetch('Values.json')
    .then(response => response.json())
    .then(data => {
        const { day, month, year, fine_gold_tola, fine_gold_gram, tejabi_gold_tola, tejabi_gold_gram, silver_tola, silver_gram } = data[0];
        dateElement.textContent = `Gold price on ${day} ${month} ${year}`;
        fineGoldTolaElement.textContent = `Tola: ${fine_gold_tola}`;
        fineGoldGramElement.textContent = `10 Grams: ${fine_gold_gram}`;
        tejabiGoldTolaElement.textContent = `Tola: ${tejabi_gold_tola}`;
        tejabiGoldGramElement.textContent = `10 Grams: ${tejabi_gold_gram}`;
        silverTolaElement.textContent = `Tola: ${silver_tola}`;
        silverGramElement.textContent = `10 Grams: ${silver_gram}`;
    })
    .catch(error => console.error(error));