const baseConfigs = {
  // GQL_BASE_URL: "http://localhost:5050/graphql",
  // GQL_WS_URL: "ws://localhost:4000/graphql",
  GQL_BASE_URL: "https://8ae7-117-217-241-162.in.ngrok.io/graphql",
  GQL_WS_URL: "wss://cce6-117-217-241-162.in.ngrok.io/graphql",
};

const _config = {
  production: { ...baseConfigs },
  staging: { ...baseConfigs },
  development: { ...baseConfigs },
};

const getEnvironment = () => {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = "development"; // getPlatform();
  // ...now return the correct environment
  return _config[platform];
};

export default getEnvironment();
