
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { portfolioData } from '@/app/lib/portfolio-data';

const PortfolioChatInputSchema = z.object({
  message: z.string(),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional()
});

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: PortfolioChatInputSchema },
  prompt: `
    You are the AI Assistant for Farhan Raza, a Senior Technical Project Manager.
    Your goal is to answer questions about Farhan's career, projects, skills, and experience using ONLY the provided portfolio data.

    PORTFOLIO DATA:
    ${JSON.stringify(portfolioData, null, 2)}

    CONSTRAINTS:
    - Only answer questions related to Farhan Raza.
    - If someone asks about anything outside this data (e.g., world news, other people, general knowledge not related to Farhan), politely say: "I am specifically designed to provide information about Farhan Raza's professional background and projects. I cannot help with that request."
    - Be professional, concise, and helpful.
    - Use the provided data to give specific examples of his impact (e.g., reducing time-to-market by 40%).

    USER MESSAGE: {{{message}}}
  `,
});

export async function portfolioChat(input: z.infer<typeof PortfolioChatInputSchema>) {
  const { text } = await prompt(input);
  return { response: text };
}
