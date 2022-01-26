import _BaseService from './_base-service';
import { Auth } from 'aws-amplify';

class AuthService extends _BaseService {
  async login(email: string, password: string): Promise<any> {
    const user = await Auth.signIn({
      username: email,
      password,
    });
    console.log(user);
  }
}

export default AuthService;
