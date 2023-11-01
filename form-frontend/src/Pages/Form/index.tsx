import React, { useState, ChangeEvent } from "react";
import { Container, Form } from "./styles";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
import SelectCustomizado from "../../Components/Select/index";
import { validarNome, validarColor, validarCpf, validarEmail, validarObservation } from "../../utils/validadores";
import FormService from '../../Services/FormServices';

const formService = new FormService();

interface FormState {
  name: string;
  cpf: string;
  email: string;
  color: string;
  observation: string;
}

const PageForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [form, setForm] = useState<FormState>({
    name: '',
    cpf: '',
    email: '',
    color: selectedColor,
    observation: ''
  });

  const rainbowColors = [
    'Vermelho',
    'Laranja',
    'Amarelo',
    'Verde',
    'Azul',
    'Anil',
    'Violeta',
  ];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await formService.createForm(form)
      setLoading(false);
      if (response.message) {
        console.log(response)
        alert(response.message);
        window.location.reload();
      } else {
        alert('Nenhuma mensagem disponível na resposta');
      }
    } catch (err) {
      alert('Erro ao enviar o formulário, tente novamente.');
      setLoading(false);
    }
  }

  const validadorInputs = () => {
    return validarNome(form.name) &&
    validarCpf(form.cpf) &&
    validarEmail(form.email) &&
    validarColor(form.color) &&
    validarObservation(form.observation);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const selectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const color = event.target.value;
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSelectedColor(color);
  };

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setForm({
      ...form,
      [event.target.name]: formatCpf(value)
    });
  };

  const formatCpf = (value: string) => {
    const numericCpf = value.replace(/\D/g, '');
    
    if (numericCpf.length <= 3) {
      return numericCpf;
    } else if (numericCpf.length <= 6) {
      return `${numericCpf.slice(0, 3)}.${numericCpf.slice(3)}`;
    } else if (numericCpf.length <= 9) {
      return `${numericCpf.slice(0, 3)}.${numericCpf.slice(3, 6)}.${numericCpf.slice(6)}`;
    } else {
      return `${numericCpf.slice(0, 3)}.${numericCpf.slice(3, 6)}.${numericCpf.slice(6, 9)}-${numericCpf.slice(9, 11)}`;
    }
  };

  return (
    <Container>
      <Form>
        <h1>Formulário</h1>
        <Input
          name='name'
          placeholder='Digite o seu nome completo.'
          onChange={handleChange}
          type='text'
          value={form.name}
        />
        <Input
          name='cpf'
          placeholder='Digite o seu cpf.'
          onChange={handleCpfChange}
          type='text'
          value={form.cpf}
        />
        <Input
          name='email'
          placeholder='Digite o seu email'
          onChange={handleChange}
          type='text'
          value={form.email}
        />
        <SelectCustomizado
          name='color'
          options={rainbowColors}
          onChange={selectChange}
        />
        <Input
          name='observation'
          placeholder='Observação'
          onChange={handleChange}
          type='text'
          value={form.observation}
        />
        <Botao
          type='submit'
          text='Enviar'
          onClick={handleSubmit}
          disabled={loading || !validadorInputs()}
        />
      </Form>
    </Container>
  );
}

export default PageForm;
