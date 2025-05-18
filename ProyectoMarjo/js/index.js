document.getElementById('chatbot-send').addEventListener('click', function () {
    const inputField = document.getElementById('chatbot-input');
    const userMessage = inputField.value.trim();

    if (userMessage) {
        addMessage(userMessage, 'user');
        const botResponse = getCustomResponse(userMessage);
        addMessage(botResponse, 'bot');
        inputField.value = '';
    }
});

function addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getCustomResponse(userMessage) {
    // Respuestas personalizadas
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "adiós": "¡Adiós! Que tengas un buen día.",
        "ayuda": "Claro, dime qué necesitas.",
        "¿cómo estás?": "¡Estoy aquí para ayudarte! ¿Y tú?",
        "gracias": "¡De nada! Estoy aquí para lo que necesites.",
        "quiero una tecla personalizada": "¡Entendido! Si gustas una tecla personalizada puedes escribirnos personalmente en nuestra cuenta de instagram @ecoteclas_cia"
    };

    // Busca una respuesta personalizada
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "Lo siento, no entiendo eso. ¿Puedes reformularlo?";
}