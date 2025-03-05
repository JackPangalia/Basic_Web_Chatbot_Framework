/**
 * ChatbotIframe - Vanilla JavaScript Version
 *
 * This script creates an iframe containing a chatbot and manages its dimensions and behavior,
 * adapting to both mobile and desktop environments.
 */
function createChatbotIframe() {
  // Create wrapper div
  const wrapper = document.createElement('div');
  wrapper.classList.add('fixed', 'z-50', 'transition-all', 'duration-300');

  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'ai-chatbot';
  //! Replace the src with the actual URL of the chatbot frontend
  iframe.src = 'http://localhost:5173/Centonis_ai_web_chatbot_frontend'; // Replace with actual embed URL
  iframe.style.border = 'none';
  iframe.scrolling = 'no';

  // Attach iframe to wrapper
  wrapper.appendChild(iframe);

  // Function to check and apply mobile/desktop styles
  function checkMobile() {
    const mobile = window.innerWidth <= 768;

    if (mobile) {
      // Mobile styles: full screen iframe
      wrapper.classList.remove('bottom-[1rem]', 'right-6');
      wrapper.classList.add('bottom-0', 'right-0', 'left-0', 'top-0');

      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
      iframe.style.maxWidth = '100%';
      iframe.style.maxHeight = '100%';
      iframe.classList.remove('rounded-2xl');
    } else {
      // Desktop styles: fixed dimensions
      wrapper.classList.remove('bottom-0', 'right-0', 'left-0', 'top-0');
      wrapper.classList.add('bottom-[1rem]', 'right-6');

      iframe.style.width = '90vw';
      iframe.style.height = '80vh';
      iframe.style.maxWidth = '400px';
      iframe.style.maxHeight = '700px';
      iframe.classList.add('rounded-2xl');
    }

    iframe.classList.add('shadow-lg', 'bg-white');
  }

  // Handle messages from iframe
  function handleMessages(event) {
    if (!event.data) return;

    if (event.data.type === 'resizeChatbot' && window.innerWidth > 768) {
      if (event.data.expanded) {
        // Expanded dimensions for desktop
        iframe.style.width = '90vw';
        iframe.style.height = '90vh';
        iframe.style.maxWidth = '900px';
        iframe.style.maxHeight = '800px';
      } else {
        // Default dimensions for desktop
        iframe.style.width = '90vw';
        iframe.style.height = '80vh';
        iframe.style.maxWidth = '400px';
        iframe.style.maxHeight = '700px';
      }
    }

    if (event.data.type === 'closeChatbot') {
      // Send message to parent to close the chatbot
      window.parent.postMessage({ type: 'closeChatbotFromIframe' }, '*');
    }
  }

  // Prevent wheel event propagation
  function preventWheelPropagation(e) {
    const rect = iframe.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      e.stopPropagation();
    }
  }

  // Initial setup
  checkMobile();
  window.addEventListener('resize', checkMobile);
  window.addEventListener('message', handleMessages);
  wrapper.addEventListener('wheel', preventWheelPropagation, { passive: false });

  // Cleanup function (call this when you want to remove the iframe)
  function cleanup() {
    window.removeEventListener('resize', checkMobile);
    window.removeEventListener('message', handleMessages);
    wrapper.removeEventListener('wheel', preventWheelPropagation);
    wrapper.remove();
  }

  return {
    element: wrapper,
    cleanup
  };
}