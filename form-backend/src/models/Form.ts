import db from '../config/db';

class Form {
  public name: string;
  public cpf: string;
  public email: string;
  public color: string;
  public observation: string;

  constructor(name: string, cpf: string, email: string, color: string, observation: string) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.color = color;
    this.observation = observation;
  }

  async saveToDatabase(): Promise<Form> {
    try {
      const result = await db.one(
        'INSERT INTO forms (name, cpf, email, color, observation) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [this.name, this.cpf, this.email, this.color, this.observation]
      );
      return result;
    } catch (error) {
      throw new Error('Erro ao salvar o formulário no banco de dados');
    }
  }

  async update(name: string, email: string, color: string, observation: string): Promise<Form | null> {
    try {
      const updatedForm = new Form(name, this.cpf, email, color, observation);
      const result = await db.one(
        'UPDATE forms SET name = $1, email = $2, color = $3, observation = $4 WHERE cpf = $5 RETURNING *',
        [updatedForm.name, updatedForm.email, updatedForm.color, updatedForm.observation, this.cpf]
      );
      return result;
    } catch (error) {
      throw new Error('Erro ao atualizar o formulário');
    }
  }

  async delete(): Promise<boolean> {
    try {
      const result = await db.result('DELETE FROM forms WHERE cpf = $1', this.cpf);
      return result.rowCount === 1;
    } catch (error) {
      throw new Error('Erro ao excluir o formulário');
    }
  }

  static async findById(id: number): Promise<Form | null> {
    try {
      const result = await db.oneOrNone('SELECT * FROM forms WHERE id = $1', id);
      if (result) {
        return new Form(result.name, result.cpf, result.email, result.color, result.observation);
      }
      return null;
    } catch (error) {
      throw new Error('Erro ao encontrar o formulário pelo ID');
    }
  }

  static async findByCpf(cpf: string): Promise<Form | null> {
    try {
      const result = await db.oneOrNone('SELECT * FROM forms WHERE cpf = $1 LIMIT 1', cpf);
      if (result) {
        return new Form(result.name, result.cpf, result.email, result.color, result.observation);
      }
      return null;
    } catch (error) {
      throw new Error('Erro ao encontrar o formulário pelo CPF');
    }
  }
}

export default Form;