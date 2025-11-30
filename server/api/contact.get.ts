export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'contact')
    .where('extension', '=', 'json')
    .first()

  return result.body
})
