exports.getIndex = (req, res, next) => {
    res.render('public/index', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getMessages = (req, res, next) => {
    res.render('public/messages', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getNewFriend = (req, res, next) => {
    res.render('public/new-friend', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getTips = (req, res, next) => {
    res.render('public/tips', { Path: "/home", PageTitle: "ConnectHub" },)
}