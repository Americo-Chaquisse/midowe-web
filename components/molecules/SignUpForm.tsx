import Link from 'next/link';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

interface SignUpFormProps {
  showTermsArea?: boolean;
  termsUrl?: string;
  privacyUrl?: string;
}

interface TermsAgreeProps {
  termsUrl: string;
  privacyUrl: string;
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

const TermsAgree = ({ termsUrl, privacyUrl }: TermsAgreeProps) => {
  return (
    <div className="mt-3">
      <Label>
        Ao continuar, significa que concorda com os{' '}
        <Link href={termsUrl}>
          <a className="underline">termos & condições</a>
        </Link>
        , e a nossa{' '}
        <Link href={privacyUrl}>
          <a className="underline">politica de privacidade</a>
        </Link>
        .
      </Label>
    </div>
  );
};

export default SignUpForm;
