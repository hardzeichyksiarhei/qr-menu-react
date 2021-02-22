import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VerticalScrolling = ({ height, maxHeight, children }) => (
  <StyledVerticalScrolling height={height} maxHeight={maxHeight} className="vertical-scrolling">
    {children}
  </StyledVerticalScrolling>
)

const StyledVerticalScrolling = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  max-height: ${(props) => props.maxHeight};
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
  maxHeight: '100%',
}

VerticalScrolling.propTypes = {
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default VerticalScrolling
