
import { GoogleGenAI } from "@google/genai";

// Use API key directly from environment as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSecurityAnalysis = async (query: string) => {
  try {
    // Using gemini-3-pro-preview for complex security analysis tasks (STEM/coding reasoning)
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: query,
      config: {
        systemInstruction: `You are Sentinel AI, a world-class cybersecurity expert and research assistant. 
        Your style is professional, concise, and deeply technical. 
        Provide insights on threat intelligence, secure coding, AI risks, and architectural best practices.
        When discussing threats, categorize them by MITRE ATT&CK if applicable.
        Keep formatting clean with Markdown.`,
        temperature: 0.7,
      },
    });

    // Access .text property directly as per guidelines
    return response.text || "I'm sorry, I couldn't generate an analysis at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the security intelligence core.";
  }
};
