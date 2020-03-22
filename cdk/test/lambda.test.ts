import { expect as expectCDK, matchTemplate, MatchStyle, haveResource, countResources, ABSENT, haveResourceLike } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import Cdk = require('../lib/lambda-stack');

const app = new cdk.App();
const stack = new Cdk.LambdaStack(app, 'MyTestStack');

test('Total Lambdas', () => {
    expectCDK(stack).to(countResources(
      'AWS::Lambda::Function', 1))});
  
test('Runtime Check', () => {
  expectCDK(stack).to(haveResource(
    'AWS::Lambda::Function', {
      Runtime: "nodejs10.x",
    }))});

test('Code Not Inline', () => {
  expectCDK(stack).to(haveResourceLike(
    'AWS::Lambda::Function',
    {
      Code: {
        S3Bucket: {}
      }
    }))});