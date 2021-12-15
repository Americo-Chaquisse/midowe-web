import TextLineSeparator from '../../atoms/TextLineSeparator';
import TextLink from '../../atoms/TextLink';
import TitleHeader from '../../atoms/TitleHeader';
import SignInForm from '../../molecules/SignInForm';
import SocialLogin from '../../molecules/SocialLogin';

const SignIn = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <TitleHeader title="Bem vindo de volta. Nós existimos para tornar simples dar e receber ajuda." />

          <div className="max-w-sm mx-auto">
            <SignInForm />

            <TextLineSeparator label="Ou" />

            <SocialLogin
              onSubmit={(source: string) => {
                alert(source);
              }}
            />

            <TextLink
              text="Não possue euma conta?"
              linkName="Registar-se"
              href="/signup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
