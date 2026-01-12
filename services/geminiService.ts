
import { GoogleGenAI, Type } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getJewelryRecommendation(userPreference: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `O usuário busca uma recomendação de joia de luxo. Preferência: ${userPreference}. 
        Responda como um concierge de luxo da Lumina Jewels. 
        Sugira algo entre Anéis, Colares, Brincos ou Pulseiras. Seja elegante e persuasivo.`,
        config: {
          systemInstruction: "Você é o Concierge Virtual da Lumina Jewels. Sua linguagem deve ser extremamente refinada, sofisticada e acolhedora. Foque em exclusividade, brilho e raridade.",
          temperature: 0.7,
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Nossos especialistas estão ocupados polindo novas peças. Como posso ajudar com sua escolha hoje?";
    }
  }
}
