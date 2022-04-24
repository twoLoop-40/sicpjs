
function aPlusAbsB (a: number, b: number) {
	type NumberFunction = {
		(a: number, b:number) : number
	}
	const plus: NumberFunction = (a, b) => {
		return a + b
	}
	const minus: NumberFunction = (a, b) => {
		return a - b
	}

	return (b >= 0
		? plus
		: minus
	) (a, b)
}

console.log(aPlusAbsB(7 , -2))