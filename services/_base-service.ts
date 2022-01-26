import Amplify from 'aws-amplify';

class _BaseService {
  serverUrl = () => 'https://api.midowe.co.mz';
}

Amplify.configure({
  Auth: {
    region: 'eu-west-3',
    userPoolId: 'eu-west-3_Roes25s0b',
    userPoolWebClientId: '7eiboa6nqubohrd53bc8kskrvo',
    oauth: {
      domain: 'midowemz.auth.eu-west-3.amazoncognito.com',
      scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin',
      ],
      redirectSignIn: 'http://localhost:3000/console/',
      redirectSignOut: 'http://localhost:3000/',
      clientId: '7eiboa6nqubohrd53bc8kskrvo',
      responseType: 'token',
    },
  },
});

export default _BaseService;
