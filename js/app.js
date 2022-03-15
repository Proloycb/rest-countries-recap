const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountriesHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// option 2
const getCountriesHTML = ({name, flags, area, capital, population, region}) => {
    return `
        <div class = "country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
            <p>Area: ${area}</p>
            <p>Capital: ${capital}</p>
            <p>Region: ${region}</p>
            <p>Population: ${population}</p>
        </div>
    `;
};

// option 1
// const getCountriesHTML = country => {
//     const {name, flags, area, capital, population, region} = country;
//     return `
//         <div class = "country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//             <p>Area: ${area}</p>
//             <p>Capital: ${capital}</p>
//             <p>Region: ${region}</p>
//             <p>Population: ${population}</p>
//         </div>
//     `;
// };

// orginal
// const getCountriesHTML = country => {
//     return `
//         <div class = "country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//             <p>Area: ${country.area}</p>
//             <p>Capital: ${country.capital}</p>
//             <p>Population: ${country.population}</p>
            
//         </div>
//     `;
// }
loadCountries();