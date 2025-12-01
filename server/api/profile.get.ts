export default defineCachedEventHandler(async (event) => {
  const result = await queryCollection(event, 'profile')
    .where('extension', '=', 'md')
    .first()

  return result
}, {
  maxAge: 60 * 60 * 24,
  name: 'profile'
})
