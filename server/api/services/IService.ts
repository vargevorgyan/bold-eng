export default interface IService<T> {
	validate(model: T): Promise<boolean>
	create(model: T): Promise<T>
	update(model: T): Promise<T>
	delete(id: number): Promise<number>
	getById(id: number): Promise<T>
}
