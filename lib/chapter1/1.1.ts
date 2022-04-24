{
	const a: number = 3
	const b: number = a + 1
	const c: number = (a > b
		? a
		: a < b
		? b
		: -1
	)

	console.log(c)
}