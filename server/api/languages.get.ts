export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'languages')
    .where('extension', '=', 'json')
    .first()

  return result.body
})
