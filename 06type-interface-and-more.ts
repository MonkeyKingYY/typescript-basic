// 06

//type inference
//类型推断
let str = 'str'

// union types 联合类型
let numberOrString: number | string
numberOrString.toString()
numberOrString.valueOf()

function getLength(input: number | string): number {
	// 类型断言
	const str = input as string
	if (str.length) {
		return str.length
	} else {
		const number = input as number
		return number.toString().length
	}
}

// type guard
// 类型守护，当遇到联合类型时，使用条件语句会自动缩小类型范围
function getLength2(input: number | string): number {
	if (typeof input === 'string') {
		return input.length
	} else {
		return input.toString.length
	}
}
