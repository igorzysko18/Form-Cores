import { Router } from 'express';
import FormController from '../controllers/FormController';
import {
    createFormValidation,
    getFormByIdValidation,
    updateFormValidation,
    deleteFormValidation,
  } from '../validators/formValidator';

const formRouter = Router();

formRouter.post('', createFormValidation, FormController.createForm);

formRouter.get('/:id', getFormByIdValidation, FormController.getFormById);

formRouter.put('/:id', updateFormValidation, FormController.updateForm);

formRouter.delete('/:id', deleteFormValidation, FormController.deleteForm);

export default formRouter;