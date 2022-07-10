export const _ = {
	isEmpty(obj: any) {
		return (
			[Object, Array].includes((obj || {}).constructor) &&
			!Object.entries(obj || {}).length
		)
	},

	isNotEmpty(obj: any) {
		return !_.isEmpty(obj)
	},
}
