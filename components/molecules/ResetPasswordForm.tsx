import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

const ResetPasswordForm = () => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="email"
          label="Email"
          placeholder="Escreva o seu email"
        />
      </div>

      <div className="flex flex-wrap -mx-3 mt-6">
        <Button>Enviar o link de redefinição</Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
