import * as cdk from '@aws-cdk/core';
import lambda = require('@aws-cdk/aws-lambda');
import path = require('path');

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler'))
      // code: lambda.Code.fromInline('SomeInlineCodeToForceFailure')
    })
  }
}
