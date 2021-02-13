/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Layout from 'components/Layout'
import Pagination, { Page } from 'components/Pagination'

function IndexPage() {
  return (
    <Layout>
      <Pagination>
        <Page>first</Page>
        <Page>second</Page>
        <Page>third</Page>
      </Pagination>
    </Layout>
  )
}

export default IndexPage
