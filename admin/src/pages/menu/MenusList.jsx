import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'

import { PageHeader } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import translate from '../../intl/translate'
import { fetchMenus, clearMenus } from '../../store/actions/menus'

import menusSelectors from '../../store/selectors/menus'
import ButtonLink from '../../components/ButtonLink'
import MenuList from '../../components/menu/MenusList'

const MenusList = () => {
  const intl = useIntl()
  const dispatch = useDispatch()

  const isMenusLoading = useSelector(menusSelectors.isMenusLoading)
  const menus = useSelector(menusSelectors.allMenus)

  useEffect(() => {
    dispatch(fetchMenus())

    return () => {
      dispatch(clearMenus())
    }
  }, [dispatch])

  return (
    <div className="menus-list-page">
      <PageHeader
        style={{ paddingLeft: 0, paddingRight: 0 }}
        ghost={false}
        title={intl.formatMessage({ id: 'MyMenus' })}
        extra={[
          <ButtonLink linkTo="/menus/create" type="primary" icon={<PlusOutlined />} key="add-menu">
            {translate('AddMenu')}
          </ButtonLink>,
        ]}
      />
      <MenuList menus={menus} isMenusLoading={isMenusLoading} />
    </div>
  )
}

export default MenusList
