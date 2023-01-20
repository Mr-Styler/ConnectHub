exports.get404 = (req, res, next) => {
    res.render('error/404', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.get500 = (req, res, next) => {
    res.render('error/500', { Path: "/home", PageTitle: "ConnectHub" },)
}