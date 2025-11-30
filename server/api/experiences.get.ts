export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'experiences')
    .where('extension', '=', 'md')
    .all()

  return result
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .map(exp => ({
      title: exp.title,
      company: exp.company,
      companyUrl: exp.companyUrl,
      startDate: exp.startDate,
      endDate: exp.endDate,
      location: exp.location,
      description: exp.description
    }))
})
