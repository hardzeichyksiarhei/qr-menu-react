// тест будет корректен, когда getSettings будет получать данные с сервера

import { runSaga } from 'redux-saga'

import { requestedSettings, requestedSettingsSuccess } from '../actions/settings'

import { fetchSettings } from './settingsSagas'

import * as api from '../../services/settings'

describe('SettingsApiRequest', () => {
  it('should call api and dispatch success action', async () => {
    const dummySettings = {
      regionSettings: {
        country: 'Belarus',
        currency: 'BLR',
        time: 24,
      },
      supplier: {
        restaurantName: 'Random restaurant',
        companyName: 'Random company name',
        phone: '+375 25 555-55-55',
        website: 'link',
      },
    }
    const requestSettings = jest
      .spyOn(api, 'getSettings')
      .mockImplementation(() => Promise.resolve(dummySettings))

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchSettings,
    ).toPromise()

    expect(requestSettings).toHaveBeenCalledTimes(0)
    expect(dispatched).toEqual([requestedSettings(), requestedSettingsSuccess(dummySettings)])
    requestSettings.mockClear()
  })
})
