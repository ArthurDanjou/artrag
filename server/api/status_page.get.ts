export default defineEventHandler(async (event) => {
  const { statusPage } = useRuntimeConfig(event)
  return await $fetch(statusPage)
})
