
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI();

export async function POST(req) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Je bent een behulpzame klantenservice medewerker voor NODO Box. Je beantwoordt vragen over zelfverwarmende bento boxen (zoals de JONETSU KIT), verzendinformatie vanuit Japan naar Nederland, veiligheid (UN 3131, calciumoxide, SDS), en duurzaamheid. Gebruik eenvoudige taal. Als je iets niet zeker weet, verwijs de klant door naar info@gozerdeliver.nl.' },
      { role: 'user', content: message }
    ],
  });

  return NextResponse.json({ reply: completion.choices[0].message.content });
}
