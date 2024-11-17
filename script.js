function vote(candidateId) {
    const messageArea = document.getElementById("message-area"); // Message container
    const beepSound = document.getElementById("beep-sound"); // Beep sound element

    // Check if the vote is for the 10th candidate
    if (candidateId === 10) {
        const button = document.getElementById("btn-10");

        // Disable the button to prevent multiple presses
        button.disabled = true;
        button.style.backgroundColor = "red";

        // Play the beep sound
        beepSound.play();

        // After the beep sound ends, display the message
        beepSound.onended = () => {
            messageArea.classList.remove("hidden"); // Show the message container
            messageArea.textContent =
                "Thanks for voting Taufique Ismail Shaikh. On 20th November, press the same button to elect Taufique Ismail Shaikh.";
            
            // Automatically hide the message after 4 seconds
            setTimeout(() => {
                messageArea.classList.add("hidden"); // Hide the message container
            }, 4000);
        };
    } else {
        alert("This vote is only for the 10th candidate.");
    }
}

