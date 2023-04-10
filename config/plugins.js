module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: "sNrMOlxhLUf3P_1vUgLNOTmUCkP5yRwKQaATe5eoVrs",
        sites: [
          {
            name: 'nhstore-craterblock',
            id: "398fdb92-d547-45a6-a8a4-1c5c7412e1bb",
            buildHook: "https://api.netlify.com/build_hooks/643496110ffc9830b8e9d8d0"
          }
        ]
      }
    },
  });
