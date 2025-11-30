export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'experiences')
    .where('extension', '=', 'md')
    .all()

  return result
    .sort((a, b) => new Date(b.meta.startDate).getTime() - new Date(a.meta.startDate).getTime())
    .map(exp => ({
      title: exp.meta.title,
      company: exp.meta.company,
      companyUrl: exp.meta.companyUrl,
      startDate: exp.meta.startDate,
      endDate: exp.meta.endDate,
      location: exp.meta.location,
      description: exp.meta.description
    }))
})
