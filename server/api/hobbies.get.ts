export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'hobbies')
    .where('extension', '=', 'md')
    .first()

  return result.body
})
