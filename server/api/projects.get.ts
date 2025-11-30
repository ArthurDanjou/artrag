export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'projects')
    .where('extension', '=', 'md')
    .all()

  return result
})
