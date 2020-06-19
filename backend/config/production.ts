export default {
  app: {
    port: process.env.PORT,
  },
  mongo: {
    uri: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_Secret,
    refreshSecret: process.env.JWT_Refresh_Secret,
    tokenLife: process.env.Token_Life,
    refreshTokenLife: process.env.Refresh_Token_Life,
    domain: process.env.My_Domain,
  },
};
