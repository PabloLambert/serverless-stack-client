export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-pl"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://55wmn9h7g9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Il9co2H9A",
    APP_CLIENT_ID: "1didccfftst9n6m0bmo41k31s",
    IDENTITY_POOL_ID: "us-east-1:d926bf03-0b84-4445-baf2-fd1c0de7587e"
  },
  MAX_ATTACHMENT_SIZE: 10000000
}
