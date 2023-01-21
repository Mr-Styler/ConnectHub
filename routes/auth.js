const router = require("express").Router();
const AuthController = require("./../controllers/auth");

router.route('/login')
    .get(AuthController.getLogin)

router.route('/sign-up')
    .get(AuthController.getSignUp)

router.route('/reset-password')
    .get(AuthController.getResetPwd)

router.route('/new-password')
    .get(AuthController.getNewPwd)

    router.route('/settings')
    .get(AuthController.getSettings)

router.route('/change-password')
    .get(AuthController.getChangePwd)

module.exports = router