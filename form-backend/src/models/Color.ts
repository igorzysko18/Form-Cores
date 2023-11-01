import db from '../config/db';

class Color {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  async createColor(name: string): Promise<Color> {
    try {
      const result = await db.one(
        'INSERT INTO colors (name) VALUES ($1) RETURNING id',
        [name]
      );
      return result.id;
    } catch (error) {
      throw new Error('Erro ao criar a cor no banco de dados');
    }
  }

  static async getColorById(id: number): Promise<any> {
    try {
      const result = await db.oneOrNone('SELECT * FROM colors WHERE id = $1', [id]);
      return result;
    } catch (error) {
      throw new Error('Erro ao obter a cor pelo ID');
    }
  }

  static async getAllColors(): Promise<any[]> {
    try {
      const result = await db.any('SELECT * FROM colors');
      return result;
    } catch (error) {
      throw new Error('Erro ao obter todas as cores');
    }
  }

  async updateColor(id: number, name: string): Promise<boolean> {
    try {
      const result = await db.result(
        'UPDATE colors SET name = $1 WHERE id = $2',
        [name, id]
      );
      return result.rowCount === 1;
    } catch (error) {
      throw new Error('Erro ao atualizar a cor');
    }
  }

  async deleteColor(id: number): Promise<boolean> {
    try {
      const result = await db.result('DELETE FROM colors WHERE id = $1', [id]);
      return result.rowCount === 1;
    } catch (error) {
      throw new Error('Erro ao excluir a cor');
    }
  }
}

export default Color;
