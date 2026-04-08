const policyData = {
    continents: ["Africa", "Asia", "Europe", "North America", "South America", "Oceania", "Antarctica"],
    countries: [
        {
            continent: "Africa",
            name: "Nigeria",
            population: 216746934,
            overview: "Nigeria is the most populous country in Africa, with strong cultural and economic influence across the region.",
            economicDrivers: "Oil and gas production, agriculture, telecommunications, and a growing digital economy drive Nigeria's GDP.",
            unBackground: "Nigeria joined the United Nations in 1960 as a newly independent nation seeking support for development and regional leadership."
        },
        {
            continent: "Africa",
            name: "Egypt",
            population: 110990103,
            overview: "Egypt is a historic nation at the crossroads of Africa and Asia with a large, urbanized population.",
            economicDrivers: "Tourism, the Suez Canal, agriculture, and energy exports are major components of Egypt's economy.",
            unBackground: "Egypt became a UN member in 1945 and has played a major role in Arab diplomacy and international development."
        },
        {
            continent: "Africa",
            name: "South Africa",
            population: 60776000,
            overview: "South Africa is a regional economic leader with a diverse society and strong infrastructure.",
            economicDrivers: "Mining, manufacturing, finance, and tourism are core to South Africa's economy.",
            unBackground: "South Africa joined the United Nations in 1945 and later returned in 1994 after the end of apartheid."
        },
        {
            continent: "Asia",
            name: "China",
            population: 1412600000,
            overview: "China is the world's most populous country and a major global manufacturing hub.",
            economicDrivers: "Manufacturing, technology, exports, and infrastructure investment power China's economy.",
            unBackground: "China joined the UN in 1945 and is a founding member of many international programs."
        },
        {
            continent: "Asia",
            name: "India",
            population: 1407560000,
            overview: "India is a rapidly growing country with a large workforce and expanding technology sector.",
            economicDrivers: "Information technology, agriculture, pharmaceuticals, and services support India's economy.",
            unBackground: "India joined the UN in 1945 and has consistently advocated for emerging economies and development."
        },
        {
            continent: "Asia",
            name: "Japan",
            population: 124310000,
            overview: "Japan is an advanced economy known for technology, manufacturing, and strong social infrastructure.",
            economicDrivers: "Automotive, electronics, services, and robotics are leading drivers of Japan's economy.",
            unBackground: "Japan became a UN member in 1956 and has since contributed to peacekeeping and international aid."
        },
        {
            continent: "Europe",
            name: "Germany",
            population: 83517045,
            overview: "Germany is the largest economy in Europe, with a strong industrial and export base.",
            economicDrivers: "Automotive manufacturing, engineering, chemicals, and renewable energy drive Germany's economy.",
            unBackground: "Germany joined the UN in 1973 and has been an active participant in EU and global governance."
        },
        {
            continent: "Europe",
            name: "France",
            population: 67081000,
            overview: "France is a key European nation with strengths in culture, technology, and agriculture.",
            economicDrivers: "Aerospace, luxury goods, tourism, and agriculture support France's economy.",
            unBackground: "France was a founding member of the United Nations in 1945 and remains influential in international diplomacy."
        },
        {
            continent: "Europe",
            name: "United Kingdom",
            population: 67220000,
            overview: "The United Kingdom has a diversified economy anchored by finance, innovation, and global trade.",
            economicDrivers: "Financial services, creative industries, manufacturing, and technology help sustain the UK economy.",
            unBackground: "The United Kingdom joined the UN as a founding member in 1945 and has a long history of global engagement."
        },
        {
            continent: "North America",
            name: "United States",
            population: 336998000,
            overview: "The United States is a global leader in technology, education, and economic innovation.",
            economicDrivers: "Technology, finance, healthcare, and consumer markets are central to the U.S. economy.",
            unBackground: "The United States joined the United Nations as a founding member in 1945 and shaped the organization's early institutions."
        },
        {
            continent: "North America",
            name: "Canada",
            population: 39246000,
            overview: "Canada is a stable, resource-rich nation with a strong social safety net.",
            economicDrivers: "Energy, natural resources, services, and manufacturing are mainstays of Canada's economy.",
            unBackground: "Canada became a UN founding member in 1945 and remains active in peacekeeping and human rights."
        },
        {
            continent: "North America",
            name: "Mexico",
            population: 127792000,
            overview: "Mexico is a large North American nation with dynamic manufacturing and cultural industries.",
            economicDrivers: "Automotive manufacturing, tourism, agriculture, and trade support Mexico's economy.",
            unBackground: "Mexico joined the United Nations in 1945 to strengthen its international partnerships and development goals."
        },
        {
            continent: "South America",
            name: "Brazil",
            population: 216422446,
            overview: "Brazil is the largest country in South America with broad natural resources and industry.",
            economicDrivers: "Agribusiness, energy, mining, and services drive Brazil's economy.",
            unBackground: "Brazil joined the UN as a founding member in 1945 and has emphasized sustainable development and regional cooperation."
        },
        {
            continent: "South America",
            name: "Argentina",
            population: 45840000,
            overview: "Argentina has a diversified economy with strong agriculture and cultural exports.",
            economicDrivers: "Agriculture, food processing, energy, and tourism are important to Argentina's economy.",
            unBackground: "Argentina joined the United Nations in 1945 and has historically promoted peace and human rights."
        },
        {
            continent: "South America",
            name: "Colombia",
            population: 51650000,
            overview: "Colombia is a growing economy with expanding technology and export industries.",
            economicDrivers: "Oil, agriculture, mining, and services support Colombia's economy.",
            unBackground: "Colombia became a UN member in 1945 and is active in regional development initiatives."
        },
        {
            continent: "Oceania",
            name: "Australia",
            population: 25853000,
            overview: "Australia is a developed economy with strong education, services, and resource sectors.",
            economicDrivers: "Mining, services, tourism, and agriculture are driving Australia's economy.",
            unBackground: "Australia joined the United Nations as a founding member in 1945 and supports Pacific development."
        },
        {
            continent: "Oceania",
            name: "New Zealand",
            population: 5195000,
            overview: "New Zealand is a stable, export-oriented economy with strong social institutions.",
            economicDrivers: "Agriculture, tourism, technology, and renewable energy support New Zealand's economy.",
            unBackground: "New Zealand joined the UN in 1945 and is known for its contributions to peacekeeping and sustainable development."
        }
    ],
    getCountriesByContinent(continent) {
        return this.countries
            .filter(country => country.continent === continent)
            .sort((a, b) => b.population - a.population);
    },
    getCountryByName(name) {
        return this.countries.find(country => country.name.toLowerCase() === name.toLowerCase());
    }
};
