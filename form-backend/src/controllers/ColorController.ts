import { Request, Response } from 'express';
import Color from '../models/Color';

class ColorController {
  static async createColor(req: Request, res: Response) {
    const { name } = req.body;
    
    try {
      const newColor = new Color(name);
      const savedColor = await newColor.createColor(name);
      return res.status(201).json({ message: 'Cor criada com sucesso.', savedColor });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar a cor.' });
    }
  }

  static async updateColor(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const existingColor = await Color.getColorById(Number(id));
    if (!existingColor) {
      return res.status(404).json({ message: 'Cor não encontrada.' });
    }

    try {
      const color = new Color(name); 
      const result = await color.updateColor(Number(id), name);
      if (result) {
        return res.status(200).json({ message: 'Cor atualizada com sucesso.' });
      } else {
        return res.status(500).json({ message: 'Erro ao atualizar a cor.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar a cor.' });
    }
  }

  static async deleteColor(req: Request, res: Response) {
    const { id } = req.params;

    const existingColor = await Color.getColorById(Number(id));
    if (!existingColor) {
      return res.status(404).json({ message: 'Cor não encontrada.' });
    }

    try {
      const color = new Color(''); 
      const result = await color.deleteColor(Number(id)); 
      if (result) {
        return res.status(204).json({ message: 'Cor deletada com sucesso.' });
      } else {
        return res.status(500).json({ message: 'Erro ao excluir a cor.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao excluir a cor.' });
    }
  }

  static async getAllColors(req: Request, res: Response) {
    try {
      const colors = await Color.getAllColors();
      return res.status(200).json(colors);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao obter as cores.' });
    }
  }
}

export default ColorController;
