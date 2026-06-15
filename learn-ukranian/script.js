const form = document.querySelector(".signup-form");
const note = document.querySelector(".form-note");

if (form && note) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const email = String(data.get("email") || "").trim();

        if (!email) {
            note.textContent = "Enter an email address to join the waitlist.";
            return;
        }

        note.textContent = "You're on the list. We will notify you when access opens.";
        form.reset();
    });
}
