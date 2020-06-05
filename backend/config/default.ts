export default {
  app: {
    port: 9001,
  },
  mongo: {
    uri: "mongodb://127.0.0.1:27017/test-legion-td",
  },
  jwt: {
    secret: "yerdasellsavon",
    refreshSecret: "yermawsellsavon",
    tokenLife: "15m",
    refreshTokenLife: "1d",
    domain: "localhost",
  },
};
