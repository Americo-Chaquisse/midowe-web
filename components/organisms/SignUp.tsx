import TextLineSeparator from '../atoms/TextLineSeparator';
import TextLink from '../atoms/TextLink';
import TitleHeader from '../atoms/TitleHeader';
import SignUpForm from '../molecules/SignUpForm';
import SocialLogin from '../molecules/SocialLogin';

const SignUp = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <TitleHeader title="Registe-se e crie campanhas de angariação de fundos" />

          <div className="max-w-sm mx-auto">
            <SignUpForm
              showTermsArea={true}
              termsUrl="/terms"
              privacyUrl="/privacy"
            />

            <TextLineSeparator label="Ou" />

            <SocialLogin
              onSubmit={(source: string) => {
                alert(source);
              }}
            />

            <TextLink
              text="Já possui uma conta?"
              linkName="Entrar"
              href="/signin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
