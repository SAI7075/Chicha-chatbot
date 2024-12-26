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

        if (userInput.toLowerCase().includes("hello")) {
            botResponse.textContent = "Hi there! How can I assist you?";
        } else if (userInput.toLowerCase().includes("stock")) {
            botResponse.textContent = "Sorry, I can't fetch stock prices right now.";
        } else {
            botResponse.textContent = "Sorry, I didn't understand that.";
        }

        document.getElementById("chatlog").appendChild(botResponse);
        document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
    }, 1000);
}
