import express from "express"
import controller from "./scholarshipsController"

export default express
	.Router()
	.get("/get", controller.getScholarships)
	.put("/create", controller.createScholarships)
	.delete("/delete", controller.deleteScholarships)
