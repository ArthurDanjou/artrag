export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve Arthur Danjou\'s detailed coding statistics and analytics powered by WakaTime, including programming languages, time spent coding, and productivity metrics.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me the stats of Arthur Danjou powered by Wakatime.`
        }
      }]
    }
  }
})
