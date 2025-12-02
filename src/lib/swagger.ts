import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/pages/api', // define api folder
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Boo Technical Test API',
        version: '1.0',
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
