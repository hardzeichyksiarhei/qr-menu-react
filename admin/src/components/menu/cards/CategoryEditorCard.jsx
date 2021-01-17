import React from 'react'

import { Card, Button } from 'antd'

import VerticalScrolling from '../../VerticalScrolling'
import CategoryItem from '../items/CategoryItem'

const CategoryEditorCard = () => (
  <div className="category-editor">
    <Card title="Categories" extra={<Button type="primary">Add new</Button>}>
      <VerticalScrolling height="calc(100vh - 360px)">
        <div className="category-list">
          <CategoryItem />
        </div>
      </VerticalScrolling>
    </Card>
  </div>
)

export default CategoryEditorCard
