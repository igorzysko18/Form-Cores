import axios, { AxiosResponse } from 'axios';

interface Color {
  id: number;
  name: string;
}

class ColorService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.REACT_APP_API || '';
  }

  async getColors(): Promise<Color[]> {
    try {
      const response: AxiosResponse<Color[]> = await axios.get(`${this.baseURL}/color`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar cores da API.');
    }
  }
}

export default ColorService;
