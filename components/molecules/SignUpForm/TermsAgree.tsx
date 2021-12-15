import Link from 'next/link';
import Label from '../../atoms/Label';

interface TermsAgreeProps {
  termsUrl: string;
  privacyUrl: string;
}

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

export default TermsAgree;
