import User from '../types/user';
import _BaseService from './_base-service';

class UserService extends _BaseService {
  async getByUsername(username: string): Promise<User> {
    const response = await fetch(`${this.serverUrl()}/user/${username}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<User>;
  }
}

export default UserService;
