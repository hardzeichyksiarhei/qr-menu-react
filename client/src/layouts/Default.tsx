import React, { Suspense, useMemo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

function Default() {
  return (
    <Layout className="default-layout">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Layout>
  )
}
export default Default
