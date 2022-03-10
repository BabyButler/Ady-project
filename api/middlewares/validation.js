const { body, validationResult } = require('express-validator');
exports.SignUpValidation=[

    body('username','please enter a name').notEmpty(),
    body('email','enter a valid email').isEmail(),
    body('password','must contains at least 6 caracters').isLength({min:6})

]

exports.SignInValidation=[
 
    body('email','enter a valid email').isEmail(),
    body('password','must contains at least 6 caracters').isLength({min:6})

]

exports.Validation=(req,res,next)=>{
    console.log(req.body);
    const errors=validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).send({ errors: errors.array() });
    }
    next()
}