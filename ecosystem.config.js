module.exports = {
    apps: [
      {
        name: 'my-app',
        script: 'app.js',
        env: {
          NODE_ENV: 'development', // Default environment
        },
        env_production: {
          NODE_ENV: 'production', // Production environment
        },
      },
    ],
  };
  