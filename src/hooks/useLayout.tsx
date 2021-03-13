/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Layout from 'components/Layout'

function useLayout<T>(InputComponent: React.FunctionComponent<T>) {
  function OutputComponent(props: T) {
    return (
      <Layout>
        <InputComponent {...props} />
      </Layout>
    )
  }

  return OutputComponent
}

export default useLayout
