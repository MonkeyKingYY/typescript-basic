//05

// function add(x: number, y: number, z?: number): number {
// 	if (typeof z === 'number') {
// 		return x + y + z
// 	}
// 	return x + y
// }

// 另一种写法
const add = (x: number, y: number, z?: number): number => {
	if (typeof z === 'number') {
		return x + y + z
	}
	return x + y
}

// typescript中，冒号后面跟着的都是类型的声明
let add2: (x: number, y: number, z?: number) => number = add

interface ISum {
	(x: number, y: number, z?: number): number
}
let add3: ISum = add
