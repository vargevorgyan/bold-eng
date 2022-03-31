import ScholarshipsModel from "../../../shared/models/ScholarshipsModel"
import knex from "../../common/database"
import IService from "./IService"

export default class ScholarshipsService implements IService<ScholarshipsModel> {
	validate(model: ScholarshipsModel): Promise<boolean> {
		throw new Error("Method not implemented.")
	}

	update(model: ScholarshipsModel): Promise<ScholarshipsModel> {
		throw new Error("Method not implemented.")
	}

	public async delete(id: number): Promise<number> {
		try {
			const scholarship = await knex<ScholarshipsModel>("scholarships").where("id", id).del()

			return scholarship
		} catch (error) {
			return Promise.reject(error)
		}
	}

	public async create(model: ScholarshipsModel): Promise<ScholarshipsModel> {
		try {
			const scholarship = await knex<ScholarshipsModel>("scholarships").insert<ScholarshipsModel>(model)

			return scholarship
		} catch (error) {
			return Promise.reject(error)
		}
	}
	public async get(): Promise<ScholarshipsModel[]> {
		try {
			const scholarships = await knex<ScholarshipsModel>("scholarships").select("*")
			return scholarships
		} catch (error) {
			return Promise.reject(error)
		}
	}

	public async getById(id: number): Promise<ScholarshipsModel> {
		throw new Error("Method not implemented.")
	}
}
