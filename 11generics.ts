// 11
function echo<T>(arg: T): T {
	return arg
}

const result = echo('string')

function swap<T, U>(tuple: [T, U]): [U, T] {
	return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])
// result2[1]

function echoWithArr<T>(arg: T[]): T[] {
	console.log(arg.length)
	return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
	length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
	console.log(arg.length)
	return arg
}

const str3 = echoWithLength('str')
// const num = echoWithLength(123) 类型“number”的参数不能赋给类型“IWithLength”的参数。ts(2345)
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])

// class Queue {
//     private data = [];
//     push(item) {
//         return this.data.push(item)
//     }
//     pop() {
//         return this.data.shift()
//     }
// }
// const queue = new Queue();
// queue.push(1)
// queue.push('str')
// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());   这样写运行时会报错,因为字符串没有toFixed的方法， 但是编写代码时没有报错提示，可以使用泛型改造这个类

class Queue<T> {
	private data = []
	push(item: T) {
		return this.data.push(item)
	}
	pop(): T {
		return this.data.shift()
	}
}
const queue = new Queue<number>()
queue.push(1)
// queue.push('str') 报错，类型“string”的参数不能赋给类型“number”的参数。
console.log(queue.pop().toFixed())

interface KeyPair<T, U> {
	key: T
	value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'string' }
let kp2: KeyPair<string, number> = { key: 'string', value: 2 }
let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]
