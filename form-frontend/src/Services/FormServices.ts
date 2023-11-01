import axios from 'axios';

class FormService {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.REACT_APP_API || '';
  }

  async createForm(formData: any) {
    try {
      const response = await axios.post(`${this.baseURL}/form`, formData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.data) {
            return error.response.data;
          } else {
            throw new Error('Não foi possível criar o formulário.');
          }
        } else {
          throw new Error('Não foi possível se conectar com o servidor.');
        }
      } else {
        throw new Error('Não foi possível criar o formulário.');
      }
    }
  }
  
}

export default FormService; 
