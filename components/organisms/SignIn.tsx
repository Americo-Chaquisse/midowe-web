import AuthService from '../../services/auth-service';
import TextLineSeparator from '../atoms/TextLineSeparator';
import TextLink from '../atoms/TextLink';
import TitleHeader from '../atoms/TitleHeader';
import SignInForm, { SignInFormValues } from '../molecules/SignInForm';
import SocialLogin from '../molecules/SocialLogin';

const authService = new AuthService();

const SignIn = () => {
  const handleSignIn = (data: SignInFormValues) => {
    authService.login(data.email, data.password);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10">
          <TitleHeader title="Bem vindo de volta!" />

          <div className="max-w-sm mx-auto">
            <SignInForm onSignIn={handleSignIn} />

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
