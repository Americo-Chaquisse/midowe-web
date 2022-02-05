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
      redirectSignIn:
        process.env.NODE_ENV == 'development'
          ? 'http://localhost:3000/u/'
          : 'https://midowe.co.mz/u/',
      redirectSignOut:
        process.env.NODE_ENV == 'development'
          ? 'http://localhost:3000'
          : 'https://midowe.co.mz',
      clientId: '7eiboa6nqubohrd53bc8kskrvo',
      responseType: 'token',
    },
  },
});

export default _BaseService;
