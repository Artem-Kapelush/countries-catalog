const countries = [
    {
        name: "Фінляндія",
        capital: "Гельсінкі",
        flag: "https://flagpedia.net/data/flags/w580/fi.webp",
        continent: "Europe"
    },
    {
        name: "Японія",
        capital: "Токіо",
        flag: "https://flagpedia.net/data/flags/w580/jp.webp",
        continent: "Asia"
    },
    {
        name: "США",
        capital: "Вашингтон",
        flag: "https://flagpedia.net/data/flags/w580/us.webp",
        continent: "North America"
    },
    {
        name: "Бразилія",
        capital: "Бразиліа",
        flag: "https://flagpedia.net/data/flags/w580/br.webp",
        continent: "South America"
    },
    {
        name: "Ліберія",
        capital: "Монровія",
        flag: "https://flagpedia.net/data/flags/w580/lr.webp",
        continent: "Africa"
    },
    {
        name: "Китай",
        capital: "Пекін",
        flag: "https://flagpedia.net/data/flags/w580/cn.webp",
        continent: "Asia"
    },
    {
        name: "Австралія",
        capital: "Канберра",
        flag: "https://flagpedia.net/data/flags/w580/au.webp",
        continent: "Oceania"
    },
    {
        name: "Німеччина",
        capital: "Берлін",
        flag: "https://flagpedia.net/data/flags/w580/de.webp",
        continent: "Europe"
    },
    {
        name: "Сомалі",
        capital: "Джиджига",
        flag: "https://flagpedia.net/data/flags/w580/so.webp",
        continent: "Africa"
    },
    {
        name: "Мексика",
        capital: "Мехіко",
        flag: "https://flagpedia.net/data/flags/w580/mx.webp",
        continent: "North America"
    },
    {
        name: "Зімбабве",
        capital: "Хараре",
        flag: "https://flagpedia.net/data/flags/w580/zw.webp",
        continent: "Africa"
    },
    {
        name: "Аргентина",
        capital: "Буенос-Айрес",
        flag: "https://flagpedia.net/data/flags/w580/ar.webp",
        continent: "South America"
    },
    {
        name: "Індонезія",
        capital: "Джакарта",
        flag: "https://flagpedia.net/data/flags/w580/id.webp",
        continent: "Oceania"
    },
    {
        name: "Франція",
        capital: "Париж",
        flag: "https://flagpedia.net/data/flags/w580/fr.webp",
        continent: "Europe"
    },
    {
        name: "Індія",
        capital: "Нью-Делі",
        flag: "https://flagpedia.net/data/flags/w580/in.webp",
        continent: "Asia"
    },
    {
        name: "Канада",
        capital: "Оттава",
        flag: "https://flagpedia.net/data/flags/w580/ca.webp",
        continent: "North America"
    },
    {
        name: "Туреччина",
        capital: "Анкара",
        flag: "https://flagpedia.net/data/flags/w580/tr.webp",
        continent: "Asia"
    },
    {
        name: "Республіка Палау",
        capital: "Нґерулмуд",
        flag: "https://flagpedia.net/data/flags/w580/pw.webp",
        continent: "Oceania"
    },
    {
        name: "Колумбія",
        capital: "Богота",
        flag: "https://flagpedia.net/data/flags/w580/co.webp",
        continent: "South America"
    },
    {
        name: "Україна",
        capital: "Київ",
        flag: "https://flagpedia.net/data/flags/w580/ua.webp",
        continent: "Europe"
    },
    {
        name: "Єгипет",
        capital: "Каїр",
        flag: "https://flagpedia.net/data/flags/w580/eg.webp",
        continent: "Africa"
    },
    {
        name: "Республіка Куба",
        capital: "Гавана",
        flag: "https://flagpedia.net/data/flags/w580/cu.webp",
        continent: "North America"
    },
    {
        name: "Афганістан",
        capital: "Кабул",
        flag: "https://flagpedia.net/data/flags/w580/af.png?v=un",
        continent: "Asia"
    },
    {
        name: "Венесуела",
        capital: "Каракас",
        flag: "https://flagpedia.net/data/flags/w580/ve.webp",
        continent: "South America"
    },
    {
        name: "Нова Зеландія",
        capital: "Велінгтон",
        flag: "https://flagpedia.net/data/flags/w580/nz.webp",
        continent: "Oceania"
    },
    {
        name: "Велика Британія",
        capital: "Лондон",
        flag: "https://flagpedia.net/data/flags/w580/gb.webp",
        continent: "Europe"
    },
];

function displayCountries(list) {
    const countriesList = document.getElementById("countries-list");
    countriesList.innerHTML = "";

    list.forEach(country => {
        const countryHTML = `
            <div class="country" data-continent="${country.continent}">
                <img class="flag" src="${country.flag}" alt="${country.name}">
                <span class="name">${country.name}</span> <span class="capital">- ${country.capital}</span>
            </div>
        `;
        countriesList.innerHTML += countryHTML;
    });
}

function filterCountries() {
    const search = document.getElementById("search").value.toLowerCase();
    const continent = document.getElementById("continent").value;
    const filtered = countries.filter(country => {
        const nameMatch = country.name.toLowerCase().includes(search);
        const continentMatch = continent === "" || country.continent === continent;
        return nameMatch && continentMatch;
    });

    displayCountries(filtered);
}

displayCountries(countries);

document.getElementById("search").addEventListener("input", filterCountries);
document.getElementById("continent").addEventListener("change", filterCountries);