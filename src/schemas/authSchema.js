import joi from "joi";

const singUpSchema =  joi.object({
    name: joi.string().max(50).required(),
    email: joi.string().email().max(60).required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
})

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})
export {
    singUpSchema,
    signinSchema
}