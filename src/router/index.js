import { userRouter } from "express";
import userAuth from "./auth"
import user from "./user"
/**
 * @swagger
 * paht:
 *  /login:
 *      post:
 *          summary: "로그인 성공 유무"
 *          description: "Post 방식으로 로그인 성공 유무 전송"
 *          tags:
 *          responses:
 *              "200":
 *                  description: 회원가입
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: String
 *                                  data:
 *                                      type: ?
 * 
 */
userRouter.post("/login", userAuth.loginSucc);

