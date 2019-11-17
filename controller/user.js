var model = require('../models/index')
var bcrypt = require('twin-bcrypt')
var jwt = require('jsonwebtoken')
var auth = require('../config/auth')
var validator = require('../validator/register')


exports.register = function(req, res) {
    const {errors, isValid} = validator(req.body);
    
    const {
        nama_perusahaan,
        first_name,
        last_name,
        username,
        email,
        type
    } = req.body;

    const user_id = bcrypt.hashSync(req.body.username, 8);
    const expiresIn = 84600;
    const password = bcrypt.hashSync(req.body.password, 8);
    const token = jwt.sign(
        {id: username},
        auth.secret,
        {expiresIn: expiresIn}
    );
    
    if (!isValid) {
        return res.json(errors)
    }

    model.user.findOne({
        where: {
            username: username
        }
    })
    .then (u_username => {
        if (u_username) {
            res.json({
                message: "Username telah digunakan."
            })
        }
        else {
            model.user.findOne({
                where: {
                    email: email
                }
            })
            .then (cd_email => {
                if (cd_email) {
                    res.json({
                        message: "Email telah terdaftar."
                    })
                }
                else {
                    model.user.create({
                        user_id: user_id,
                        username: username,
                        email: email,
                        password: password,
                        token: token
                    })
                    .then (user_ok => {
                        if (type == 'Candidates') {
                            model.candidates.create({
                                user_id: user_id,
                                first_name: first_name,
                                last_name: last_name,                                    
                                email: email
                            })
                            .then (cd_ok => {
                                res.json({
                                    message: "Candidat bernama "+first_name+" "+last_name+" berhasil didaftarkan",
                                    token,
                                    expiresIn
                                })
                                res.redirect('/profil/')
                            })
                        }
                        if (type == 'Companies') {
                            model.companies.create({
                                user_id: user_id,
                                nama_perusahaan: nama_perusahaan,
                                email:email
                            })
                            .then (cp_ok => {
                                res.json({
                                    message: "Perusahaan bernama "+nama_perusahaan+" berhasil didaftarkan",
                                    token,
                                    expiresIn
                                })
                                res.redirect('/profil')
                            })
                        }
                    })
                }
            })
        }
    })
}


exports.login = function(req, res) {
    const {
        username,
        email
    } = req.body;

    model.user.findOne({
        where: {
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 8)
        }
    })
    .then(ok => res.json({

    }))
    
}

















    /*model.user.findOrCreate({
        where: {
            email: email
        },
        defaults: {
            username: username,
            password: password,
            token: token
        }
    })
    .then(uses => {
        if (uses) {
            res.json({
                message: "Email telah digunakan."
            })
        }
        else {
            res.json({
                data: uses
            })
        }
    })*/

