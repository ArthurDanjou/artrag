export default defineCachedEventHandler(async (event) => {
  const result = await queryCollection(event, 'hobbies')
    .where('extension', '=', 'md')
    .first()

  return result.body
}, {
  maxAge: 60 * 60 * 24,
  name: 'hobbies'
})
