let reviews =
    Number(localStorage.getItem("reviewCount")) || 0;

reviews++;

localStorage.setItem("reviewCount", reviews);

document.querySelector("#reviewCount").textContent =
    reviews;

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;