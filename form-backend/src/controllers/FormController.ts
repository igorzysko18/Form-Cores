import { Request, Response } from 'express';
import Form from '../models/Form';

class FormController {
  static async createForm(req: Request, res: Response) {
    const { name, cpf, email, color, observation } = req.body;
    const existingForm = await Form.findByCpf(cpf);
    if (existingForm) {
      return res.status(409).json({ message: 'Já existe um formulário com esse CPF.' });
    }

    const newForm = new Form(name, cpf, email, color, observation);

    try {
      const savedForm = await newForm.saveToDatabase();
      return res.status(201).json({message: 'Formulário enviado com sucesso.', ...savedForm});
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao criar o formulário.' });
    }
  }

  static async updateForm(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, color, observation } = req.body;

    const existingForm = await Form.findById(Number(id));
    if (!existingForm) {
      return res.status(404).json({ message: 'Formulário não encontrado.' });
    }

    try {
      const updatedForm = await existingForm.update(name, email, color, observation);
      return res.status(200).json({message: 'Formulário atualizado com sucesso.', ...updatedForm});
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar o formulário.' });
    }
  }

  static async deleteForm(req: Request, res: Response) {
    const { id } = req.params;

    const existingForm = await Form.findById(Number(id));
    if (!existingForm) {
      return res.status(404).json({ message: 'Formulário não encontrado.' });
    }

    try {
      const result = await existingForm.delete();
      if (result) {
        return res.status(204).send({message: 'Formulário deletado com sucesso.'});
      } else {
        return res.status(500).json({ message: 'Erro ao excluir o formulário.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao excluir o formulário.' });
    }
  }
}

export default FormController;
