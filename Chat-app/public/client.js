const socket = io();

const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const sendButton = document.getElementById("sendButton");

// Send message on button click
sendButton.addEventListener("click", () => {
    const message = input.value.trim();
    
    if (message) {
        socket.emit("chat-message", message); // Send the message to the server
        input.value = ""; // Clear the input field
    }
});

// Listen for incoming messages
socket.on("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message;
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the chat
});