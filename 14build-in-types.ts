// 14 内置类型
const a: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()

const reg = /abc/
reg.test('abc')

// build-in Object
Math.pow(2, 3)

// DOM and BOM
let body = document.body
let allis = document.querySelectorAll('li')
allis.keys()

document.addEventListener('click', (e) => {
	e.preventDefault()
})

// Utility Types
interface IPerson2 {
	name: string
	age: number
}
let viking: IPerson2 = { name: 'yee', age: 18 }
// Partial内置的，表示可选的，可以传也可以不传
type IPartial = Partial<IPerson2>
let viking2: IPartial = {}

// 内置的Omit，表示提出某个属性
type IOmit = Omit<IPerson2, 'name'>
let viking3: IOmit = { age: 20 }
