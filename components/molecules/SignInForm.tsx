import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import TextInput from '../atoms/TextInput';

export interface SignInFormValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  onSignIn: (data: SignInFormValues) => void;
}

const SignInForm = ({ onSignIn }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const onSubmit: SubmitHandler<SignInFormValues> = (data) => onSignIn(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="email"
          label="Email"
          placeholder="Escreva o seu email"
          register={register('email')}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput
          type="password"
          label="Password"
          placeholder="Escreva a sua password"
          altLabelLink="/reset-password"
          altLabelText="Esqueçeu a password?"
          register={register('password')}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <Checkbox label="Lembrar-se de mim" />
      </div>

      <div className="flex flex-wrap -mx-3 mt-6">
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};

export default SignInForm;
