const { User } = require('./models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'rahasia'
const notp = require('notp')

class Controller {
    static getUser(req, res){
        User.findAll({
            attributes: {
                exclude: ['password']
            },
            order: [['id','DESC']]
        })
        .then(result => {
            res.status(200).json({
                users: result
            })
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

    static register(req, res){
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(result => {
            if(result) {
                res.status(400).json({
                    msg: 'Email already exist'
                })
            } else {
                const { passwordConfirm, password } = req.body
                if(passwordConfirm !== password){
                    res.status(400).json({
                        msg: 'Password do not matches!'
                    })
                } else {
                    const data = {
                        email: req.body.email,
                        password: req.body.password,
                        name: req.body.name
                    }
                
                    User.create(data)
                    .then(result => {
                        res.status(201).json({
                            newUser: result,
                            otpKeySendToMail: notp.hotp.gen(result.otpKey)
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            error: err
                        })
                    })
                }
            }
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

    static editUser(req, res){
        const data = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
        User.update(data, {
            where: {
                id: req.params.id
            }
        })
        .then(_ => {
            res.status(200).json({
                msg: 'User edited'
            })
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

    static deleteUser(req, res){
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(_ => {
            res.status(200).json({
                msg: 'User deleted'
            })
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

    static login(req, res){
        const data = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where: {
                email: data.email
            }
        })
        .then(result => {
            if(!result){
                res.status(400).json({
                    msg: 'Email/Password do not matches!'
                })
            } else {
                if(!bcrypt.compareSync(data.password, result.password)){
                    res.status(400).json({
                        msg: 'Email/Password do not matches!'
                    })   
                } else {
                    const token = jwt.sign({
                        id: result.id
                    }, SECRET_KEY)
                    res.status(200).json({
                        token
                    })
                }
            }
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

    static loginOtp(req, res){
        const data = {
            email: req.body.email,
            otpKey: req.body.otpKey
        }

        User.findOne({
            where: {
                email: data.email
            }
        })
        .then(result => {
            if(!result){
                res.status(400).json({
                    msg: 'Email/OTP key do not matches!'
                })
            } else {
                if(!notp.hotp.verify(data.otpKey, result.otpKey)){
                    res.status(400).json({
                        msg: 'Email/OTP key do not matches!'
                    })   
                } else {
                    const token = jwt.sign({
                        id: result.id
                    }, SECRET_KEY)
                    res.status(200).json({
                        token
                    })
                }
            }
        })
        .catch(_ => {
            res.status(500).json({
                error: 'Something wrong with the database.'
            })
        })
    }

}

module.exports = Controller