export const handler = async (event: any = {}): Promise<any> => {
  console.log('My Lambda!');
  const response = JSON.stringify(event, null, 2);
  return response;
}