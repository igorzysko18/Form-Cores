import { Router } from 'express';
import FormController from '../controllers/FormController';
import {
    createFormValidation,
    getFormByIdValidation,
    getFormByCpfValidation,
    updateFormValidation,
    deleteFormValidation,
  } from '../validators/formValidator';

const formRouter = Router();

formRouter.post('', createFormValidation, FormController.createForm);

//formRouter.get('/:id', getFormByIdValidation, FormController.getFormById);
//formRouter.get('/cpf/:cpf', getFormByCpfValidation, FormController.getFormByCpf); 

formRouter.put('/:id', updateFormValidation, FormController.updateForm);

formRouter.delete('/:id', deleteFormValidation, FormController.deleteForm);

export default formRouter;