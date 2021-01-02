import React from 'react'
import { PageHeader, Button } from 'antd'

import './SettingsManagement.scss'
import SettingsRegionCard from './cards/SettingsRegionCard'
import SettingsSupplierCard from './cards/SettingsSupplierCard'

const SettingsManagement = () => (
  <>
    <PageHeader
      ghost={false}
      title="Settings"
      extra={[
        <Button key="1" type="primary">
          Save
        </Button>,
      ]}
    />
    <div className="setting-cards">
      <SettingsRegionCard />
      <SettingsSupplierCard />
    </div>
  </>
)
export default SettingsManagement
