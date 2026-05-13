const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

const validBooks = [
    "1 Nephi",
    "2 Nephi",
    "Jacob",
    "Enos",
    "Jarom",
    "Omni",
    "Words of Mormon",
    "Mosiah",
    "Alma",
    "Helaman",
    "3 Nephi",
    "4 Nephi",
    "Mormon",
    "Ether",
    "Moroni"
];

buttonElement.addEventListener("click", function () {

    const chapter = inputElement.value.trim();

    if (chapter !== "") {

        if (listElement.children.length >= 10) {
            alert("You can only add 10 favorite chapters.");
            inputElement.focus();
            return;
        }

        const existingChapters = Array.from(listElement.children).map(item =>
            item.firstChild.textContent
        );

        if (existingChapters.includes(chapter)) {
            alert("This chapter is already in your list.");
            inputElement.focus();
            return;
        }

        const isValidBook = validBooks.some(book =>
            chapter.startsWith(book)
        );

        if (!isValidBook) {
            alert("Please enter a valid BOM book and chapter.");
            inputElement.focus();
            return;
        }

        const li = document.createElement("li");
        li.textContent = chapter;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.setAttribute("aria-label", `Remove ${chapter}`);

        deleteBtn.addEventListener("click", function () {
            listElement.removeChild(li);
            inputElement.focus();
        });

        li.appendChild(deleteBtn);

        listElement.appendChild(li);

        inputElement.value = "";
    }

    inputElement.focus();
});

inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        buttonElement.click();
    }
});