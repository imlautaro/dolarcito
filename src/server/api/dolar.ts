const fetchData = defineCachedFunction(
	async () => {
		const dolar = await $fetch<{
			oficial: number
			solidario: number
			blue: number
			ccb: number
			mep: number
			mepal30ci: number
			mepgd30: number
			mepgd30ci: number
			ccl: number
			cclal30: number
			cclal30ci: number
			cclgd30: number
			cclgd30ci: number
			blue_bid: number
			qatar: number
			mep_var: number
			ccl_var: number
			ccb_var: number
			blue_var: number
			mepal30: number
			time: number
		}>('https://criptoya.com/api/dolar')
		return dolar
	},
	{
		maxAge: 60 * 2,
	}
)

export default defineEventHandler(async () => {
	const dolar = await fetchData()
	return {
		blue: dolar.blue,
		mep: dolar.mep,
	}
})
