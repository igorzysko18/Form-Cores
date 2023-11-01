import { BotaoCustomizado } from './styles';

interface BotaoProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const Botao = ({ type, text, onClick, disabled }: BotaoProps) => {
  return (
    <BotaoCustomizado as="button" type={type} onClick={onClick} disabled={disabled}>
      {text}
    </BotaoCustomizado>
  );
}

export default Botao;
