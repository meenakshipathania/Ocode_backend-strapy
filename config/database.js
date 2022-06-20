module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '165.227.11.15'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'Ocode'),
      user: env('DATABASE_USERNAME', 'ocode'),
      password: env('DATABASE_PASSWORD', '@Ocode#2022'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
