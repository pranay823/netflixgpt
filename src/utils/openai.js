import OpenAI from 'openai';

import { Open_Ai_Key } from './constants';

export const openai = new OpenAI({
  apiKey: Open_Ai_Key , 
  dangerouslyAllowBrowser : true
});
