const { Router } = require("express");
const { check } = require("express-validator");
const UserController = require("../controllers/userController");
const router = new Router();
const AuthHandling = require("../middeleware/AuthHandling");


router.post("/registration",
    [
        check("username", "Имя пользователя не может быть пустым").notEmpty(),
        check("password", "Пароль должен быть больше 4").isLength({min:4})
    ],
    UserController.registration
);
router.post("/login", UserController.login);
router.get("/auth", AuthHandling, UserController.auth);

module.exports = router;