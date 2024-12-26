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

        // Example responses based on user input
        if (userInput.toLowerCase().includes("hello")) {
            botResponse.textContent += "Hello! How can I assist you today?";
        } else {
            botResponse.textContent += "Sorry, I didn’t understand that.";
        }

        document.getElementById("chatlog").appendChild(botResponse);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    }, 1000);
}
