export const validarNome = (nome: string): boolean => {
    return nome?.length > 2;
  };
  
  export const validarCpf = (cpf: string): boolean => {
    return cpf?.length === 14;
  };
  
  export const validarEmail = (email: string): boolean => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };
  
  export const validarColor = (color: string): boolean => {
    return color?.length >= 0 && color?.length <= 50; 
  };
  
  export const validarObservation = (observation: string): boolean => {
    return observation?.length >= 0 && observation?.length <= 50; 
  };
  