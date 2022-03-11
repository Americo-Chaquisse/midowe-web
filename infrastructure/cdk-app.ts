import * as cdk from 'aws-cdk-lib';
import { MidoweWebStack } from './cdk-stack';
import { Builder } from '@sls-next/lambda-at-edge';

const builder = new Builder('.', './build', { args: ['build'] });

builder
  .build()
  .then(() => {
    const app = new cdk.App();
    new MidoweWebStack(app, 'MidoweWebStack', {
      env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'us-east-1' },
    });
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
