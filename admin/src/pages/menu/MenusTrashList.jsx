import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntl } from 'react-intl'

import { PageHeader } from 'antd'

import { fetchMenus, clearMenus } from '../../store/actions/menus'
import menusSelectors from '../../store/selectors/menus'

import MenuList from '../../components/menu/MenusList'

const MenusTrashList = () => {
  const intl = useIntl()
  const dispatch = useDispatch()

  const isMenusLoading = useSelector(menusSelectors.isMenusLoading)
  const menus = useSelector(menusSelectors.deletedMenus)

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
        title={intl.formatMessage({ id: 'TrashMenus' })}
      />
      <MenuList menus={menus} isMenusLoading={isMenusLoading} />
    </div>
  )
}

export default MenusTrashList
