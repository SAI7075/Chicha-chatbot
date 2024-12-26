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

        // Example responses based on user input
        if (userInput.toLowerCase().includes("hello")) {
            botResponse.textContent = "Hello! How can I assist you today?";
        } else if (userInput.toLowerCase().includes("how are you")) {
            botResponse.textContent = "I'm just a bot, but I'm doing great! Thanks for asking.";
        } else if (userInput.toLowerCase().includes("stock")) {
            botResponse.textContent = "I can't fetch live stock prices right now, but you can check them on a financial website.";
        } else if (userInput.toLowerCase().includes("time")) {
            const currentTime = new Date().toLocaleTimeString();
            botResponse.textContent = `The current time is: ${currentTime}`;
        } else {
            botResponse.textContent = "Sorry, I didn't understand that. Try asking something else!";
        }

        document.getElementById("chatlog").appendChild(botResponse);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    }, 1000);
}
