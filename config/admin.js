module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fd55d1e900fa8ad9830589a8481dd96'),
  },
});
