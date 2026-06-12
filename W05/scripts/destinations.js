const destinations = [
    {
        name: "Quito",
        region: "Highlands",
        description: "Ecuador's capital city, known for its historic center and Mountain views.",
        image: "images/quito.webp"
    },

    {
        name: "Cuenca",
        region: "Highlands",
        description: "A UNESCO World Heritage city famous for colonial architecture.",
        image: "images/cuenca.webp"
    },

    {
        name: "Guayaquil",
        region: "Coast",
        description: "Ecuador's largest city and an important cultural and economic center.",
        image: "images/guayaquil.webp"
    },

    {
        name: "Montañita",
        region: "Coast",
        description: "Popular beach destination known for surfing and nightlife.",
        image: "images/montanita.webp"
    },

    {
        name: "Amazon Rainforest",
        region: "Amazon",
        description: "Explore incredible biodiversity and indigenous cultures.",
        image: "images/amazon.webp"
    },

    {
        name: "Galápagos Islands",
        region: "Islands",
        description: "One of the world's most famous wildlife destinations.",
        image: "images/galapagos.webp"
    }
];

const cardsContainer = document.querySelector("#cards");

function displayDestinations(list) {

    cardsContainer.innerHTML = "";

    list.forEach(destination => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy"
                width="400"
                height="250">

            <h3>${destination.name}</h3>

            <p><strong>Region:</strong> ${destination.region}</p>

            <p>${destination.description}</p>
        `;

        cardsContainer.appendChild(card);
    });
}

displayDestinations(destinations);

document.querySelector("#all").addEventListener("click", () => {
    displayDestinations(destinations);
});

document.querySelector("#highlands").addEventListener("click", () => {

    const highlands = destinations.filter(
        destination => destination.region === "Highlands"
    );

    displayDestinations(highlands);
});

document.querySelector("#coast").addEventListener("click", () => {

    const coast = destinations.filter(
        destination => destination.region === "Coast"
    );

    displayDestinations(coast);
});

document.querySelector("#amazon").addEventListener("click", () => {

    const amazon = destinations.filter(
        destination => destination.region === "Amazon"
    );

    displayDestinations(amazon);
});

document.querySelector("#islands").addEventListener("click", () => {

    const islands = destinations.filter(
        destination => destination.region === "Islands"
    );

    displayDestinations(islands);
});