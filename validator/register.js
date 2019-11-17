var valid = require('validator')
var isEmpty = require('./isEmpty')

module.exports = function validasidata (data) {

    const errors = {};

    data.email = !isEmpty(data.email) ? data.email: ""
    data.username = !isEmpty(data.username) ? data.username: ""
    data.password = !isEmpty(data.password) ? data.password: ""
    data.password2 = !isEmpty(data.password2) ? data.password2: ""
    
    if (!valid.isLength(data.username, {min: 6, max: 50})) {
        errors.username = "Username Harus lebih dari 8 karakter."
    }
    if (!valid.isEmail(data.email)) {
        errors.email = "Email dibutuhkan."
    }
    if (!valid.isLength(data.password, {min: 8, max: 255})) {
        errors.password = "Password minimal 8 karakter."
    }
    if (!valid.equals(data.password2, data.password)){
        errors.password2 = "Password Tidak sama atau kosong."
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}