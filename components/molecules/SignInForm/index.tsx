import Button from '../../atoms/Button';
import Checkbox from '../../atoms/Checkbox';
import TextInput from '../../atoms/TextInput';

const SignInForm = () => {
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
        <TextInput
          type="password"
          label="Password"
          placeholder="Escreva a sua password"
          altLabelLink="/reset-password"
          altLabelText="Algum problema para entrar?"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Checkbox label="Lembrar-se de mim" />
      </div>

      <div className="flex flex-wrap -mx-3 mt-6">
        <Button>Entrar</Button>
      </div>
    </form>
  );
};

export default SignInForm;
