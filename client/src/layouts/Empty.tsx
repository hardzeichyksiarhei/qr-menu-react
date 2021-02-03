import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Empty = () => (
  <Suspense fallback={null}>
    <Outlet />
  </Suspense>
)

export default Empty
