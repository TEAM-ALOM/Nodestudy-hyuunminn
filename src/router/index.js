/**
 * @swagger
 * tags:
 *  - name: auth
 *    description: Login management
 *  - name: user
 *    description: user management
 * 
 * components:
 *  schemas:
 *  UserType:
 *    type: object
 *    properties:
 *      id:
 *        type: string
 *      password:
 *        type: string
 *      ResponseType:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *              data:
 *                  type: any
 * 
 * @swagger
 *  /auth:
 *      post:
 *          summary: login Succ
 *          tags: [auth]
 *          description: 아이디, 비번 확인 및 토큰 반환
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/UserType"
 *          responses:
 *              "200":
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/ResponseType"
 * @swagger
 * /user:
 *  post:
 *      tags: [user]
 *      summary: 회원가입
 *      description: 사용자 생성 및 반환
 *      requestBody:
 *          required: true
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: "#/components/schemas/UserType"
 *      responses:
 *          200:
 *              content:
 *                  application/json:
 *              schema:
 *                  $ref: "#/components/schemas/ResponseType"
 * 
 */