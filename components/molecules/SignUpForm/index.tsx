import Link from 'next/link';
import Button from '../../atoms/Button';
import Label from '../../atoms/Label';
import TextInput from '../../atoms/TextInput';
import TermsAgree from './TermsAgree';

interface SignUpFormProps {
  showTermsArea?: boolean;
  termsUrl?: string;
  privacyUrl?: string;
}

const SignUpForm = ({
  showTermsArea = false,
  termsUrl = '',
  privacyUrl = '',
}: SignUpFormProps) => {
  return (
    <form>
      <div className="flex flex-wrap -mx-3 mb-4">
        <TextInput label="Nome" placeholder="Escreva o seu nome" />
      </div>
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
        />
      </div>
      <div className="flex flex-wrap -mx-3 mt-6">
        <Button>Criar conta</Button>
      </div>
      {showTermsArea && (
        <TermsAgree termsUrl={termsUrl} privacyUrl={privacyUrl} />
      )}
    </form>
  );
};

export default SignUpForm;
