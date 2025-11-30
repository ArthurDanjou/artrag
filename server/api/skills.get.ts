export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'skills')
    .where('extension', '=', 'json')
    .first()

  return result.body
})
