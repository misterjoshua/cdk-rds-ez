import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkRdsEz from '../lib/index';

test('SQS Queue Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  // WHEN
  new CdkRdsEz.CdkRdsEz(stack, 'MyTestConstruct');
  // THEN
  expectCDK(stack).to(haveResource('AWS::SQS::Queue'));
});

test('SNS Topic Created', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack');
  // WHEN
  new CdkRdsEz.CdkRdsEz(stack, 'MyTestConstruct');
  // THEN
  expectCDK(stack).to(haveResource('AWS::SNS::Topic'));
});
