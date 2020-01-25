const data = require ('./to-data')

module.exports =
  async (projects_resources_query) => {
    const [ projects_resources_record ] = await (
      data ('projects_resources')
      .where (projects_resources_query)
    )

    return projects_resources_record
  }
