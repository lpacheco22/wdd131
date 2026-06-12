const tripForm = document.querySelector("#tripForm");
const message = document.querySelector("#message");

tripForm.addEventListener("submit", saveTrip);

function saveTrip(event) {

    event.preventDefault();

    const travelerName =
        document.querySelector("#name").value;

    const travelerEmail =
        document.querySelector("#email").value;

    const destination =
        document.querySelector("#destination").value;

    const travelers =
        document.querySelector("#travelers").value;

    const travelDate =
        document.querySelector("#travelDate").value;

    const comments =
        document.querySelector("#comments").value;

    const trip = {
        travelerName,
        travelerEmail,
        destination,
        travelers,
        travelDate,
        comments
    };

    localStorage.setItem(
        "ecuadorTrip",
        JSON.stringify(trip)
    );

    if (travelers === "1") {

        message.innerHTML = `
            <h3>Trip Saved!</h3>
            <p>
                Thank you ${travelerName}.
                Your solo adventure to ${destination}
                has been saved.
            </p>
        `;

    } else {

        message.innerHTML = `
            <h3>Trip Saved!</h3>
            <p>
                Thank you ${travelerName}.
                Your group trip for ${travelers}
                travelers to ${destination}
                has been saved.
            </p>
        `;
    }

    tripForm.reset();
}