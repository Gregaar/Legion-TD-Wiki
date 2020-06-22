module.exports = {
  app: {
    port: process.env.PORT,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
  },
  jwt: {
    secret: process.env.JWT_Secret,
    refreshSecret: process.env.JWT_Rsecret,
    tokenLife: process.env.Token_Life,
    refreshTokenLife: process.env.Refresh_Token_Life,
    domain: process.env.My_Domain,
  },
};
