// Předpokládáme, že používáte Socket.IO pro real-time komunikaci
const socket = io();

// Funkce pro odeslání zprávy
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    
    // Odeslání zprávy na server
    socket.emit('chat message', message);
    
    // Vymazání vstupního pole
    messageInput.value = '';
}

// Funkce pro přijetí zprávy
socket.on('chat message', function(msg) {
    const messagesList = document.getElementById('messagesList');
    const messageItem = document.createElement('li');
    messageItem.textContent = msg;
    messagesList.appendChild(messageItem);
});

// Event listener pro odeslání zprávy po stisknutí Enter
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
