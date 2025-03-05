# Vanilla JavaScript Chatbot Embedding

## Overview
This vanilla JavaScript implementation allows easy embedding of an AI chatbot iframe into any website, with responsive design for both mobile and desktop environments.

## Features
- Responsive design (mobile and desktop)
- Easy integration with any website
- Toggle functionality for chatbot visibility
- Iframe resize and message handling
- No framework dependencies

## Prerequisites
- A hosted chatbot frontend URL
- Basic understanding of HTML and JavaScript
- (Optional) Tailwind CSS for styling (recommended but not required)

## Installation

### 1. Prepare Your Chatbot URL
Replace the placeholder URL in the `createChatbotIframe()` function:
```javascript
iframe.src = 'YOUR_ACTUAL_CHATBOT_FRONTEND_URL';
```

### 2. Embedding Options

#### A. Direct HTML Embedding
```html
<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <script>
        // Paste ENTIRE createChatbotIframe() function
        // Paste ENTIRE createChatbotToggle() function
        // Paste initialization code
    </script>
</body>
</html>
```

#### B. WordPress
- Navigate to Appearance > Theme Editor
- Paste script in footer.php or custom script area

#### C. Wix/Squarespace
- Go to Site Settings
- Find "Custom Code" or "Header/Footer Scripts"
- Paste the entire script block

## Customization

### Styling
- Modify Tailwind classes in the script
- Replace with custom CSS if not using Tailwind
- Adjust colors, positioning, and button design

### Responsive Breakpoints
Change mobile detection:
```javascript
const mobile = window.innerWidth <= 768; // Adjust as needed
```

## Troubleshooting
- Ensure chatbot URL is publicly accessible
- Check browser console for any iframe loading errors
- Verify Cross-Origin Resource Sharing (CORS) settings

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11 and below may require polyfills

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
[Insert your license here - e.g., MIT, Apache 2.0]

## Support
For issues or questions, please [insert contact method or issue tracker link]

---

### Example Customization
```javascript
// Customize button appearance
toggleButton.style.backgroundColor = 'your-color';
toggleButton.style.color = 'your-text-color';

// Custom initialization
function initializeChatbot() {
    const chatbot = createChatbotToggle();
    
    // Append to a specific container instead of body
    document.getElementById('chatbot-container').appendChild(chatbot.toggleButton);
    document.getElementById('chatbot-container').appendChild(chatbot.iframeContainer);
}
```

## Version
1.0.0 - Initial Release