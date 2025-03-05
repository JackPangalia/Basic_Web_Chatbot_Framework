
/**
 * ChatbotToggle - Vanilla JavaScript Version
 *
 * This script manages the visibility of a chatbot iframe. It provides a toggle button
 * to open and close the chatbot and listens for messages from the iframe to handle close requests.
 */
function createChatbotToggle() {
  let isOpen = false;
  let chatbotIframe = null;

  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Chatbot';
  toggleButton.classList.add(
    'bg-black', 'text-white', 'fixed', 'bottom-3', 'right-5', 
    'z-50', 'px-5', 'py-3', 'rounded-full', 'shadow-md', 
    'transition-all', 'duration-300', 'flex', 'gap-2', 'items-center'
  );

  // Create container for iframe
  const iframeContainer = document.createElement('div');
  iframeContainer.classList.add('fixed', 'bottom-3', 'right-5', 'z-50');

  // Toggle chatbot visibility
  function toggleChatbot() {
    isOpen = !isOpen;

    if (isOpen) {
      // Create and append iframe
      chatbotIframe = createChatbotIframe();
      iframeContainer.appendChild(chatbotIframe.element);
      toggleButton.style.display = 'none';
    } else {
      // Remove iframe
      if (chatbotIframe) {
        chatbotIframe.cleanup();
        iframeContainer.innerHTML = '';
        chatbotIframe = null;
        toggleButton.style.display = 'block';
      }
    }
  }

  // Handle messages from iframe
  function handleMessage(event) {
    if (event.data && event.data.type === 'closeChatbotFromIframe') {
      toggleChatbot(); // Close the chatbot
    }
  }

  // Event listeners
  toggleButton.addEventListener('click', toggleChatbot);
  window.addEventListener('message', handleMessage);

  // Cleanup function
  function cleanup() {
    toggleButton.removeEventListener('click', toggleChatbot);
    window.removeEventListener('message', handleMessage);
    
    if (chatbotIframe) {
      chatbotIframe.cleanup();
    }
    
    toggleButton.remove();
    iframeContainer.remove();
  }

  return {
    toggleButton,
    iframeContainer,
    cleanup
  };
}

// Example usage
function initializeChatbot() {
  const chatbot = createChatbotToggle();
  
  // Append to body
  document.body.appendChild(chatbot.toggleButton);
  document.body.appendChild(chatbot.iframeContainer);
}

// Call initialization when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeChatbot);
} else {
  initializeChatbot();
}