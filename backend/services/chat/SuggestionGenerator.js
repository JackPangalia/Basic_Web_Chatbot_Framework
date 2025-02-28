// services/chat/SuggestionGenerator.js

class SuggestionGenerator {
  constructor(openai) {
    this.openai = openai;
  }

  async generate(prompt, response) {
    try {
      const suggestionResponse = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        max_tokens: 150,
        temperature: 0.1,
        messages: [
          {
            role: "system",
            content: `You are a quick reply system. Generate 3 prompts based off the AI response in Json format
            {
              "quick_replies": [
                "Quick Reply 1",
                "Quick Reply 2",
                "Quick Reply 3"
              ]
            }`,
          },
          {
            role: "user",
            content: response,
          },
        ],
      });

      const suggestionsString = suggestionResponse.choices[0].message.content;
      const suggestionsJson = JSON.parse(suggestionsString);
      return suggestionsJson.quick_replies;
    } catch (error) {
      console.error("Error generating suggestions:", error);
      return [];
    }
  }
}

export default SuggestionGenerator;