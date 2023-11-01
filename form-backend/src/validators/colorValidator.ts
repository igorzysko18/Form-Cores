import { body, param } from 'express-validator';

export const createColorValidation = [
  body('name').notEmpty().withMessage('O campo nome é obrigatório'),
];

export const updateColorValidation = [
  param('id').isInt().withMessage('ID deve ser um número inteiro'),
  body('name').notEmpty().withMessage('O campo nome é obrigatório'),
];

export const deleteColorValidation = [
  param('id').isInt().withMessage('ID deve ser um número inteiro'),
];