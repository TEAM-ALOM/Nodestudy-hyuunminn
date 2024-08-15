export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "문현민 Express API with Swagger",
      version: "0.1.0",
      description: "simple CRUD API application made with Express and document with Swagger",
      license: {
        name: "문현민",
        url: "http://hyunmin.com",
        email: "ansgusals0627@naver.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/schema/user.js", "./src/router/*.js"],
};