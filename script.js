function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput === "") return;

    // Display user message
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInput;
    document.getElementById("chatlog").appendChild(userMessage);

    // Clear the input field
    document.getElementById('user-input').value = "";

    // Respond to the user
    setTimeout(function() {
        var botResponse = document.createElement("div");
        botResponse.classList.add("bot-message");

        // Add bot emoji before the bot's response
        var botEmoji = document.createElement("span");
        botEmoji.textContent = "🤖"; // Bot emoji
        botResponse.appendChild(botEmoji);

        // Multiple lines of bot's response
        if (userInput.toLowerCase().includes("hello")) {
            botResponse.textContent += "\nHello! How can I assist you today?\nI'm here to help you with anything you need!";
        } else if (userInput.toLowerCase().includes("stock")) {
            botResponse.textContent += "\nYou can ask me for stock market updates!\nJust tell me what stock you're interested in!";
        } else {
            botResponse.textContent += "\nSorry, I didn't understand that.\nCan you please rephrase?";
        }

        document.getElementById("chatlog").appendChild(botResponse);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    }, 1000);
}
