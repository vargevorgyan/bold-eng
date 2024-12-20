import {Request, Response} from "express"
import UserModel from "../../../../shared/models/UserModel"
import {body} from "express-validator"
import UserService from "../../services/userService"
import PasswordService from "../../services/passwordService"
import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET || "def_secret"

export class AuthController {
	async me(req: Request, res: Response, next) {
		const token = req.body.token

		try {
			jwt.verify(token, secret, (err, verifiedJwt) => {
				if (err) {
					res.status(404).send(err.message)
				} else {
					const user = {
						id: verifiedJwt.id,
						email: verifiedJwt.email,
						isAdmin: verifiedJwt.isAdmin
					}
					res.json(user)
				}
			})
		} catch (error) {
			next(new Error(error))
		}
	}

	async register(req: Request, res: Response, next: any) {
		try {
			let newUser: UserModel = {...req.body}

			let passService = new PasswordService()

			newUser.userPassword = await passService.generatePasswordHash(newUser.userPassword)

			await new UserService().create(newUser)
			newUser.userPassword = undefined

			res.status(201).json(newUser)
		} catch (error) {
			next(new Error(error))
		}
	}

	async login(req: Request, res: Response, next) {
		//Even though we have these same checks in the validator, we'll run them here too just in case
		try {
			const email = req.body.emailAddress
			const password = req.body.userPassword
			let user = await new UserService().getByEmail(email)
			if (!user) {
				res.status(400).json("Invalid Email or password").end()
			} else if (await new PasswordService().validatePassword(password, user.userPassword)) {
				//JWT only contains the user ID
				const payload = {
					id: user.id,
					email: user.emailAddress,
					userPassword: user.userPassword,
					isAdmin: user.isAdmin
				}
				//login lasts 100 hours
				jwt.sign(payload, secret, {expiresIn: 360000}, (err, token) => {
					if (err)
						res.status(500)
							.json({
								error: "Error signing token",
								raw: err
							})
							.end()
					res.status(200).json({
						success: true,
						token,
						isAdmin: user.isAdmin
					})
				})
			} else {
				res.status(400).json("Invalid Email or password").end()
			}
		} catch (error) {
			next(new Error(error))
		}
	}

	validateRegister() {
		let validations = [
			body("emailAddress")
				.isEmail()
				.withMessage("Invalid email address")
				.custom(async (value, {req}) => {
					const email = req.body.emailAddress
					const usr = await new UserService().getByEmail(email)
					if (usr) {
						return Promise.reject("Email address already in use")
					}
				}),
			body("userPassword", "Minimum password length is 6 characters").isString().isLength({min: 6})
		]
		return validations
	}

	validateLogin() {
		var validations = [
			body("emailAddress").isEmail().withMessage("Invalid email address"),
			body("userPassword", "Invalid password").isString().bail().isLength({min: 6}),
			body().custom(async (value, {req}) => {
				const email = req.body.emailAddress

				const password = req.body.userPassword
				let user = await new UserService().getByEmail(email)

				if (!user || !(await new PasswordService().validatePassword(password, user.userPassword))) {
					return Promise.reject("The email or password you entered is incorrect.")
				}
			})
		]
		return validations
	}
}

export default new AuthController()
