import { Injectable } from '@nestjs/common';
import axios from 'axios';

const aiUrl = process.env.AI_URL;

@Injectable()
export class AppService {
  getAiClient() {
    if (!aiUrl) throw new Error('Не найден URL AI');

    return {
      axios: axios.create({
        baseURL: aiUrl,
      }),
    };
  }

  async processMessage(message: string) {
    return { toxicLevel: 0.5, text: 'Medium toxic' };
    const { axios } = this.getAiClient();
    // @TODO: изменить на нужный URL
    const response = await axios.post('/process', { message });
    return response.data;
  }
}
