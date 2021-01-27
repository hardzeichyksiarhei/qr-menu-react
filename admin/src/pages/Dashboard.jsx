import React from 'react'
import { Row, Col } from 'antd'

import ImagesManagement from '../components/images/ImagesManagement'

import QRCodeCard from '../components/qrCode/QRCodeCard'

const IMAGES = [
  {
    id: '6011a093adcd8c1f8c3aee6e',
    sizes: {
      original: 'hput68ckkfp0xgk-kanwardeep-kaur-jTv_cWxEtFs-unsplash-original.jpeg',
      large: 'hput68ckkfp0xgk-kanwardeep-kaur-jTv_cWxEtFs-unsplash-large.jpeg',
      medium: 'hput68ckkfp0xgk-kanwardeep-kaur-jTv_cWxEtFs-unsplash-medium.jpeg',
      thumbnail: 'hput68ckkfp0xgk-kanwardeep-kaur-jTv_cWxEtFs-unsplash-thumbnail.jpeg',
    },
    userId: '6000a32e85ed5f1094076150',
  },
  {
    id: '6011a226c11bc0201ae8f503',
    sizes: {
      original: 'hput6cakkfp9kdw-tamanna-rumee-P90xikFA__4-unsplash-original.jpeg',
      large: 'hput6cakkfp9kdw-tamanna-rumee-P90xikFA__4-unsplash-large.jpeg',
      medium: 'hput6cakkfp9kdw-tamanna-rumee-P90xikFA__4-unsplash-medium.jpeg',
      thumbnail: 'hput6cakkfp9kdw-tamanna-rumee-P90xikFA__4-unsplash-thumbnail.jpeg',
    },
    userId: '6000a32e85ed5f1094076150',
  },
  null,
]

const Dashboard = () => (
  <>
    <Row>
      <Col span={6}>
        <QRCodeCard />
      </Col>
    </Row>
    {IMAGES.map((image, idx) => (
      <ImagesManagement
        previewSettings={{ width: 104, height: 104 }}
        onSelectImage={() => {}}
        image={image}
        key={image?.id || idx}
      />
    ))}
  </>
)

export default Dashboard
