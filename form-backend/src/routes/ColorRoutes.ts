import { Router } from 'express';
import ColorController from '../controllers/ColorController';
import {
    createColorValidation,
    updateColorValidation,
    deleteColorValidation,
  } from '../validators/colorValidator';

const colorRouter = Router();

colorRouter.post('', createColorValidation, ColorController.createColor);
colorRouter.put('/:id', updateColorValidation, ColorController.updateColor);
colorRouter.delete('/:id', deleteColorValidation, ColorController.deleteColor);
colorRouter.get('', ColorController.getAllColors);

export default colorRouter;
