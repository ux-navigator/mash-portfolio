const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile {
        nodes {
          relativePath
        }
      }
    }
  `)

  result.data.allFile.nodes.forEach(({ relativePath }) => {
    if (relativePath.startsWith('projects')) {
      const splitedPath = relativePath.split('/')

      if (splitedPath.length > 2 && splitedPath[1]) {
        createPage({
          path: `project/${splitedPath[1]}`,
          component: path.resolve('./src/components/ProjectTemplate/ProjectTemplate.tsx'),
          context: {
            slug: `projects/${splitedPath[1]}`,
          },
        })
      }
    }
  })
}
