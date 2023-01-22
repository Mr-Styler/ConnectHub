const User = require("../models/User")
const passport = require("passport");
const localStrategy = require("passport-local");
const crypto = require("crypto");
const { validationResult } = require('express-validator/check')


exports.getLogin = (req, res, next) => {
    res.render("auth/login", { PageTitle: 'Login', csrfToken: req.csrfToken(), errorMsg: [],
        oldInput: { username: req.body.username, password: req.body.password }, validationErrors: [] })
}

exports.postLogin = async (req, res, next) => {
    try {
        let username = req.body.username;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.array())
            return res.status(422).render("auth/login", { PageTitle: 'Login', csrfToken: req.csrfToken(), errorMsg: errors.array()[0].msg,
                oldInput: { username: req.body.username, password: req.body.password }, validationErrors: errors.array() })
        }

        const user = await User.findOne({username: username});

        if (!user) {
            return res.status(422).render("auth/login", { PageTitle: 'Login', csrfToken: req.csrfToken(), errorMsg: ["This account doesn't exist"],
                oldInput: { username: req.body.username, password: req.body.password }, validationErrors: errors.array() })
        }

        passport.authenticate("local")(req, res, (err, result) => {
            if (!req.isAuthenticated()) {
                return res.status(422).render("auth/login", { PageTitle: 'Login', csrfToken: req.csrfToken(), errorMsg: ['Wrong password, Try again'],
                    oldInput: { username: req.body.username, password: req.body.password }, validationErrors: [] })
            }
            console.log(result)
            return res.redirect("/")
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getSignUp = (req, res, next) => {
    res.render("auth/sign-up", { PageTitle: 'Register', csrfToken: req.csrfToken(), errorMsg: [],
    oldInput: { username: req.body.username, email: req.body.email, password: req.body.password, Rpassword: req.body.Rpassword}, validationErrors: [] })
}

exports.postSignUp = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array())
        return res.status(422).render("auth/sign-up", { PageTitle:"Sign Up", errorMsg: errors.array()[0].msg,
             oldInput: { username: req.body.username, email: req.body.email, password: req.body.password, Rpassword: req.body.Rpassword}, validationErrors: errors.array() })
    }
    var newUser = new User({ username: req.body.username, lastname: req.body.lastname, firstname: req.body.firstname, email: req.body.email, gender: req.body.gender,})
    console.log(newUser)
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(422).render("auth/sign-up", { PageTitle:"Sign Up", oldInput: { username: req.body.username, email: req.body.email, password: req.body.password, Rpassword: req.body.Rpassword}, validationErrors: errors.array() })
        }
        
        passport.authenticate("local")(req, res, () => {
        res.redirect("/")
        })
    })
}

exports.getSettings = (req, res, next) => {
    res.render('auth/settings', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.getResetPwd = (req, res, next) => {
    res.render('auth/reset-pwd', { PageTitle: "Reset Password", csrfToken: req.csrfToken(), errorMsg: [] })
}

exports.postResetPwd = (req, res, next) => {
    crypto.randomBytes(32, async (err, buffer) => {
        try {
            const token = buffer.toString('hex');

            const user = await User.findOne({ email : req.body.email});
            if (!user) {
                req.flash('error', 'No account with that email found');
                return res.redirect('/reset');
            }
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + 3600000;
            user.save()
            return res.redirect('/reset/' + token)
        } catch (err) {
            console.log(err)
            return res.redirect(reset);
        }
    })
}

exports.getNewPwd = async (req, res, next) => {
    try {
        const token = req.params.token;
        const user = await User.findOne({resetToken : token, resetTokenExpiration : {$gt: Date.now()}});
        res.render('auth/new-pwd', { PageTitle: 'New Pasword', csrfToken: req.csrfToken(), errorMsg: [], username: user.username, userId: user._id.toString(), pwdToken: token })
    } catch (err) {
        console.log(err)
    }
}

exports.postNewPwd = async (req, res, next) => {
    try {
        const newPwd = req.body.newPwd;
        const pwdToken = req.params.token;
        const userId = req.body.userId;
        console.log(newPwd, pwdToken, userId)

        const user = await User.findOne({resetToken : pwdToken, resetTokenExpiration : {$gt: Date.now()}, _id: userId});
        console.log(user);

        user.setPassword(newPwd, (err, users) => {
            User.updateOne({_id: users._id},{hash : users.hash, salt : users.salt}, (err, result) => {
                if (err) {
                    return console.log(err)
                }
                console.log(result)
                console.log(user)
                
            })
        })
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        user.save()
        res.redirect("/")

    } catch (err) {
        console.log(err)
    }
}

exports.getChangePwd = (req, res, next) => {
    res.render('auth/change-pwd', { Path: "/home", PageTitle: "ConnectHub" },)
}

exports.postChangePwd = (req, res, next) => {

}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}

exports.logout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err)
    })
    res.redirect("/login")
}