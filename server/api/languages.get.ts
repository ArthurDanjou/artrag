export default defineCachedEventHandler(async (event) => {
  const result = await queryCollection(event, 'languages')
    .where('extension', '=', 'json')
    .first()

  return result.body
}, {
  maxAge: 60 * 60 * 24,
  name: 'languages'
})
