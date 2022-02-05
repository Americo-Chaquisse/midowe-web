import _BaseService from './_base-service';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

class AuthService extends _BaseService {
  async login(email: string, password: string): Promise<any> {
    return await Auth.signIn({
      username: email,
      password,
    });
  }

  loginWithGoogle() {
    Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
  }

  loginWithFacebook() {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
  }
}

const AuthConstants = {
  AUTH_USER_TOKEN_KEY: 'AUTH_USER_TOKEN_KEY',
};

export { AuthConstants };

export default AuthService;
