const router = require("express").Router();
const PublicController = require("./../controllers/public");

router.route('/')
    .get(PublicController.getIndex)

router.route('/message')
    .get(PublicController.getMessages)

router.route('/new-friend')
    .get(PublicController.getNewFriend)

router.route('/tips')
    .get(PublicController.getTips)

module.exports = router