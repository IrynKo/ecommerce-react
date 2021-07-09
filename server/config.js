export default {
  MONGODB_URL:
    process.env.MONGODB_URL || "mongodb://localhost/e-commerce-react",
  JWT_SECRET: process.env.JWT_SECRET || "mysecret",
};
