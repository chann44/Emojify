import { SetStateAction } from "jotai";
import { Configuration, OpenAIApi } from "openai";
import { Dispatch } from "react";
export const getEmojified = async (
  text: string,
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  console.log(text);

  try {
    setLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      // prompt: `you are a text edirot this is the text : "${text} " add emojis on appropriate places in this text so it looks good .`,
      prompt: `Hello! Can you please help me add emojis to a given text using OpenAI's API? Here's the text: '${text}'. Please add appropriate emojis to make the message more expressive and engaging. Thank you in advance for your assistance!`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    setLoading(false);
    return response.data.choices[0].text;
  } catch (e) {
    console.log(e);
    setLoading(false);
    return e;
  }
};
