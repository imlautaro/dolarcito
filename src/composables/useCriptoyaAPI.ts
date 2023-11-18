import type { NitroFetchRequest, NitroFetchOptions } from 'nitropack'

export default <unknown>(
	request: NitroFetchRequest,
	options?: NitroFetchOptions<NitroFetchRequest>
) => {
	const {
		public: { baseUrl },
	} = useRuntimeConfig()

	return $fetch<unknown>(request, {
		baseURL: baseUrl,
	})
}
