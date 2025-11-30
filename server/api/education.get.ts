export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'education')
    .where('extension', '=', 'md')
    .all()

  return result
    .sort((a, b) => new Date(b.meta.startDate).getTime() - new Date(a.meta.startDate).getTime())
    .map((edu) => ({
      degree: edu.meta.degree,
      institution: edu.meta.institution,
      startDate: edu.meta.startDate,
      endDate: edu.meta.endDate,
      location: edu.meta.location
    }))
})
