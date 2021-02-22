/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const PageLoader = ({ isLoading, content, timeout, children }) => {
  const [localIsLoading, setLocalIsLoading] = useState(isLoading)

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setLocalIsLoading(isLoading), timeout || 300)
    }
  }, [isLoading, timeout])

  return (
    <>
      {localIsLoading ? (
        <div className={`page-loader ${isLoading ? 'show' : 'hide'}`}>{content}</div>
      ) : null}
      {children}
    </>
  )
}

export default PageLoader
