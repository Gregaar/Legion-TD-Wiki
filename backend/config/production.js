module.exports = {
  app: {
    port: process.env.PORT,
  },
  mongo: {
    uri: process.env.MONGODB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    tokenLife: process.env.TOKEN_LIFE,
    refreshTokenLife: process.env.REFRESH_TOKEN_LIFE,
    domain: process.env.COOKIE_DOMAIN,
  },
  email: {
    host: process.env.SMTP_HOST,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};
