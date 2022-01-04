import Button from '../atoms/Button';
import TextArea from '../atoms/TextArea';
import TextInput from '../atoms/TextInput';

const ContactForm = () => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="email"
          label="Email"
          placeholder="Escreva o seu email"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextArea
          label="Mensagem"
          placeholder="Escreva aqui a mensagem que quer enviar-nos"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <Button>Enviar mensagem</Button>
      </div>
    </form>
  );
};

export default ContactForm;
