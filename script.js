document.addEventListener("DOMContentLoaded",()=>{
  // ! select the Html Elements and store it in a variable
  const chatMessages = document.getElementById("chat-message");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // ? simple response for the chatbot
  // ? These all are predefined responses given by us
  //? Bot Response Object

  const botResponse = {
    hello: "Hello! How can I help you today",
    hi: "Hi there! How can i assist you",
    "how are you": "I'm doing well, thank you! How about you",
    "What can you do":
      "I can answer simple questions and have basic conversations. Try asking me something",
    bye: "Goodbye! Have a great day",
    default: "I'm not sure I understand. Could you try asking something else?"
  };

  // function to add a message to the chat

  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // scrolls to the bottom of the page
  }

  // function to get Bot response
  function getBotResponse(userMessage) {
    // we convert the user message into lowercase;
    const lowerMessage = userMessage.toLowerCase();

    //  gives us the object's key-value pairs
    // converts the object into an array of arrays:
    for (const [key, value] of Object.entries(botResponse)) {
      // console.log(value);
      if (lowerMessage.includes(key.toLowerCase())) {
        return value;
      }
    }
    return botResponse.default;
  }

  //function to handle sending messages

  function sendMessage() {
    const message = userInput.value.trim();

    if (message) {
      addMessage(message, true);
      userInput.value = "";

      // simulate bot thinking
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
      }, 1000);
    }
  }

  // event listeners
  sendButton.addEventListener("click", sendMessage);

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});



