import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API 문서 작성하기',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'],
}

const specs = swaggerJSDoc(swaggerOptions);

module.exports = {swaggerUi, specs}
