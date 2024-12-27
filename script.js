// Chatbot logic
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatWindow = document.getElementById("chat-window");

    // Add user's message
    if (userInput.trim() === "") return; // Ignore empty messages
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    chatWindow.appendChild(userMessage);

    // Bot's response
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";

    if (userInput.toLowerCase().includes("hello")) {
        botMessage.textContent = "Hello! How can I help you today?";
    } else if (userInput.toLowerCase().includes("bye")) {
        botMessage.textContent = "Goodbye! Have a great day!";
    } else {
        botMessage.textContent = "I'm still learning. Can you ask something else?";
    }

    chatWindow.appendChild(botMessage);

    // Clear input and scroll to the bottom
    document.getElementById("user-input").value = "";
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
