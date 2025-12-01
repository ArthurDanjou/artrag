export default defineCachedEventHandler(async (event) => {
  const result = await queryCollection(event, 'skills')
    .where('extension', '=', 'json')
    .first()

  return result.body
}, {
  maxAge: 60 * 60 * 24,
  name: 'skills'
})
