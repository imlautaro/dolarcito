<script setup lang="ts">
const { data } = await useFetch('/api/dolar')
</script>

<template>
	<div>
		<Stack class="p-4" items="center" justify="center">
			<h1 class="text-lg font-bold">Dolarcito</h1>
		</Stack>
		<Container vertical>
			<Stack v-if="data" vertical gap="6">
				<DolarCard v-for="item in Object.keys(data)">
					{{ item }} ${{ data[item as keyof typeof data] }}
				</DolarCard>
			</Stack>
		</Container>
	</div>
</template>
