import { body, param } from 'express-validator';

export const createFormValidation = [
  body('name').notEmpty().withMessage('O campo nome é obrigatório'),
  body('cpf')
    .isLength({ min: 11, max: 11 })
    .withMessage('CPF deve conter 11 dígitos')
    .isNumeric()
    .withMessage('CPF deve conter apenas números'),
  body('email').isEmail().withMessage('Email inválido'),
  body('color').notEmpty().withMessage('O campo cor é obrigatório'),
];

export const getFormByIdValidation = [
  param('id').isInt().withMessage('ID deve ser um número inteiro'),
];

export const updateFormValidation = [
  param('id').isInt().withMessage('ID deve ser um número inteiro'),
  body('name').notEmpty().withMessage('O campo nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('color').notEmpty().withMessage('O campo cor é obrigatório'),
];

export const deleteFormValidation = [
  param('id').isInt().withMessage('ID deve ser um número inteiro'),
];