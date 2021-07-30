
const path = require(`path`)
const glob = require(`glob`)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const createContentTypes = require(`./create/createContentTypes`)
const createBlog = require(`./create/createBlog`)
const createCategories = require(`./create/createCategories`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async (props) => {
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const perPage =  10
  const blogURI = "/news"
  const templates = getTemplates()

  await createContentTypes(props, { templates })
  await createBlog(props, { perPage, blogURI })
  await createCategories(props, { perPage })

}