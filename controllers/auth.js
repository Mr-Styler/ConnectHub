exports.getLogin = (req, res, next) => {
    res.render('auth/login', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getSignUp = (req, res, next) => {
    res.render('auth/sign-up', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getSettings = (req, res, next) => {
    res.render('auth/settings', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getResetPwd = (req, res, next) => {
    res.render('auth/reset-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getChangePwd = (req, res, next) => {
    res.render('auth/change-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}