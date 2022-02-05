import { useState } from 'react';
import AuthService, { AuthConstants } from '../../services/auth-service';
import TextLineSeparator from '../atoms/TextLineSeparator';
import TextLink from '../atoms/TextLink';
import TitleHeader from '../atoms/TitleHeader';
import SignInForm, { SignInFormValues } from '../molecules/SignInForm';
import SocialLogin, { SocialLoginType } from '../molecules/SocialLogin';

const authService = new AuthService();

interface SignInProps {
  onSuccess: () => void;
}

const SignIn = ({ onSuccess }: SignInProps) => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleSignIn = async (data: SignInFormValues) => {
    setLoading(true);
    setLoginError('');
    try {
      const user = await authService.login(data.email, data.password);
      console.log(user);
      localStorage.setItem(
        AuthConstants.AUTH_USER_TOKEN_KEY,
        user.signInUserSession.accessToken.jwtToken
      );
      onSuccess();
    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError(JSON.stringify(err));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (socialType: SocialLoginType) => {
    switch (socialType) {
      case 'google':
        authService.loginWithGoogle();
        break;
      case 'facebook':
        authService.loginWithFacebook();
        break;
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10">
          <TitleHeader title="Efectuar o login" />

          <div className="max-w-sm mx-auto">
            <SignInForm onSignIn={handleSignIn} loading={loading} />

            {loginError.length > 0 && (
              <div className="mt-5">
                <div className="alert alert-warning">
                  <div className="flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mx-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      ></path>
                    </svg>
                    <label>{loginError}</label>
                  </div>
                </div>
              </div>
            )}

            <TextLineSeparator label="Ou" />

            <SocialLogin onSubmit={handleSocialLogin} />

            <TextLink
              text="Não possui uma conta?"
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
