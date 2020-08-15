#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
new LambdaStack(app, 'MyLambdaStack');

// TODO: Check if this turns into a Github issue
// TODO Push
