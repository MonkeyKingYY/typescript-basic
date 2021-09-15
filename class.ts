class Animal {
	readonly name: string // 只读，不可修改
	constructor(name) {
		this.name = name
	}
	// private run() {
	// protected run() {
	// public run() {
	run() {
		return `${this.name} is running`
	}
}

const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
	bark() {
		return `${this.name} is barking`
	}
}

const gungun = new Dog('gungun')
console.log(gungun.run())
console.log(gungun.bark())

class Cat extends Animal {
	static categories = ['mammal']
	constructor(name) {
		// 重写构造函数，需要加上这句
		super(name)
		console.log(this.name)
	}
	run() {
		return 'Meow, ' + super.run()
	}
}
const dudu = new Cat('dudu')
console.log(dudu.run())
console.log(Cat.categories)
