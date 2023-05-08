const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.querySelector('#chatbot-input input');
const chatbotSend = document.getElementById('chatbot-send');

chatbotSend.addEventListener('click', sendMessage);

function sendMessage() {
  const message = chatbotInput.value;
  if (message.trim() === '') return;

  // Add user message to chatbot messages
  addChatbotMessage(message, 'user');

  // Check if there is a predefined response for the user message
  const response = getResponse(message);
  if (response) {
    // Wait for 1 second before showing chatbot's response
    setTimeout(() => {
      addChatbotMessage(response, 'bot');
    }, 1000);
  }

  // Clear input field
  chatbotInput.value = '';
}

function addChatbotMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatbotMessages.appendChild(messageElement);
}

function getResponse(message) {
    // Add your predefined responses here
    const predefinedResponses = {
      'hi': 'Hello there!',
      'how are you': 'I am doing well, thank you. How can I assist you?',
      'what is your name': 'My name is Peter, nice to meet you!',
      'what services do you offer': 'I offer a variety of services such as mobile and web application development, database management, and UI design. How can I help you?',
      'What is your favorite programming language?': 'I dont have a favorite programming language, as each language has its own unique strengths and weaknesses.',
      'Do you offer maintenance and support services?': 'Yes, I offer maintenance and support services to ensure your website or app stays up-to-date and runs smoothly.',
      'What is your turnaround time for projects?': 'My turnaround time varies depending on the project scope and requirements. Please provide more details about your project for an estimated timeline',
      'Can you provide examples of your previous work?': 'Yes, I have a portfolio of previous projects that I can share with you. Please provide your email address for me to send it to you.',
      'What is your design process like?': 'My design process involves understanding the clients needs and preferences, creating wireframes and mockups, and refining the design until it meets the clients satisfaction.',
      'Do you work with teams or solo?': 'I am flexible and can work with teams or solo, depending on the project requirements.',
      'Can you provide ongoing maintenance and updates for my website?': 'Yes, I provide ongoing maintenance and updates to ensure your website stays up-to-date and runs smoothly.',
      'What kind of databases do you work with?': 'I have experience working with a variety of databases, including MySQL, PostgreSQL.',
      'What is your experience with responsive design?': 'I have extensive experience in creating responsive designs that adapt to different screen sizes and devices.',
      'Can you provide references or testimonials from previous clients?': 'Yes, I have references and testimonials from previous clients that I can provide upon request.',
      'What is the best way to contact you?': 'You can contact me through this chat window or via email at petermaturwe@gmail.com.',
      'What is your experience in web development?': 'I have over 2 years of experience in web development, specializing in HTML, CSS, JavaScript, and several other web technologies.',
    };
    
    const keywords = {
      'contact': 'You can contact me through this chat window or via email at petermaturwe@gmail.com.',
      'price': 'The price for my services varies depending on the project requirements. Please provide more details about your project for an estimated quote.',
      'availability': 'I am available for new projects at the moment. Please provide more details about your project for me to confirm my availability.',
      'deadline': 'My turnaround time varies depending on the project scope and requirements. Please provide more details about your project for an estimated timeline.',
      'experience': 'I have over 2 years of experience in web development, specializing in HTML, CSS, JavaScript, and several other web technologies.',
      'portfolio': 'Yes, I have a portfolio of previous projects that I can share with you. Please provide your email address for me to send it to you.',
    };
  
    message = message.toLowerCase();
    
    // Check for predefined responses
    if (predefinedResponses[message]) {
      return predefinedResponses[message];
    }
    
    // Check for keywords in message
    for (const keyword in keywords) {
    if (message.includes(keyword)) {
    return keywords[keyword];
    }
    }
    
    // Default response if no match is found
    return "I'm sorry, I didn't understand your question. Can you please rephrase or provide more information?";
    }
    
    
    
    
    
    
    
  
