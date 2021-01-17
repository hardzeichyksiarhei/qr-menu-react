import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VerticalScrolling = ({ height, children }) => (
  <StyledVerticalScrolling height={height} className="vertical-scrolling">
    {children}
  </StyledVerticalScrolling>
)

const StyledVerticalScrolling = styled.div`
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  height: ${(props) => props.height};
  &::-webkit-scrollbar {
    width: 8px;
    margin: 0 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 3px;
  }
`

VerticalScrolling.defaultProps = {
  height: '100%',
}

VerticalScrolling.propTypes = {
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default VerticalScrolling
