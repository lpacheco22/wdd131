const visitDisplay =
    document.querySelector("#visits");

let visits =
    Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem(
    "visits",
    visits
);

if (visits === 1) {

    visitDisplay.textContent =
        "Welcome! This is your first visit.";

} else {

    visitDisplay.textContent =
        `You have visited this website ${visits} times.`;
}