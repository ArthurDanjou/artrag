export default defineEventHandler(async (event) => {
  const result = await queryCollection(event, 'education')
    .where('extension', '=', 'md')
    .all()

  return result
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .map(edu => ({
      degree: edu.degree,
      institution: edu.institution,
      startDate: edu.startDate,
      endDate: edu.endDate,
      location: edu.location
    }))
})
