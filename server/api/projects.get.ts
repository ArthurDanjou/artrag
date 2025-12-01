export default defineCachedEventHandler(async (event) => {
  const result = await queryCollection(event, 'projects')
    .where('extension', '=', 'md')
    .all()

  return result
}, {
  maxAge: 60 * 60 * 24,
  name: 'projects'
})
