import runWarm from '../utils/run-warm';

export const healthcheck = async (_: AWSLambda.APIGatewayEvent): Promise<AWSLambda.APIGatewayProxyResult> => {
  console.log('healthcheck');
  return {
    statusCode: 200,
    body: 'page ok'
  };
};

export const handler = runWarm(healthcheck);
