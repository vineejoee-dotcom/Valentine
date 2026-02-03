let messageIndex = 0;
const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // This keeps the "No" and adds the message in brackets
    noButton.textContent = `No (${messages[messageIndex]})`;
    
    // Move to the next message
    messageIndex = (messageIndex + 1) % messages.length;

    // Make the Yes button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
