exports.getLogin = (req, res, next) => {
    res.render('auth/login', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.postLogin = (req, res, next) => {

}

exports.getSignUp = (req, res, next) => {
    res.render('auth/sign-up', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.postSignUp = (req, res, next) => {

}

exports.getSettings = (req, res, next) => {
    res.render('auth/settings', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getResetPwd = (req, res, next) => {
    res.render('auth/reset-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getNewPwd = (req, res, next) => {
    res.render('auth/new-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.postNewPwd = (req, res, next) => {

}

exports.getChangePwd = (req, res, next) => {
    res.render('auth/change-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.postChangePwd = (req, res, next) => {

}

exports.isLoggedIn = (req, res, next) => {

}