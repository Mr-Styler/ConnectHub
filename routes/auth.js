const router = require("express").Router();
const AuthController = require("./../controllers/auth");

router.route('/login')
    .get(AuthController.getLogin)
    .post(AuthController.postLogin)

router.route('/sign-up')
    .get(AuthController.getSignUp)
    .post(AuthController.postSignUp)

router.route('/reset')
    .get(AuthController.getResetPwd)
    .post(AuthController.postResetPwd)

router.route('/reset/:token')
    .get(AuthController.getNewPwd)
    .post(AuthController.postNewPwd)

    router.route('/settings')
    .get(AuthController.getSettings)

router.route('/change-password')
    .get(AuthController.getChangePwd)

router.post('/logout', AuthController.logout)

module.exports = router