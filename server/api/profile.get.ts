export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'profile')
    .where('extension', '=', 'md')
    .first()

  return result
})
