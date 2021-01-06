import { runSaga } from 'redux-saga'

import { requestedUser, requestedUserSuccess, requestedUserError } from '../actions/auth'

import { fetchUser } from './authSagas'

import * as api from '../../services/users'

describe('userApiRequest', () => {
  it('should call api and dispatch success action', async () => {
    const dummyUser = { email: 'test@gmail.com' }
    const requestUser = jest
      .spyOn(api, 'getAuthUser')
      .mockImplementation(() => Promise.resolve(dummyUser))

    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUser,
    ).toPromise()

    expect(requestUser).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([requestedUser(), requestedUserSuccess(dummyUser)])
    requestUser.mockClear()
  })

  it('should call api and dispatch error action', async () => {
    const requestAuthors = jest.spyOn(api, 'getAuthUser').mockImplementation(() => Promise.reject())
    const dispatched = []
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchUser,
    ).toPromise()

    expect(requestAuthors).toHaveBeenCalledTimes(1)
    expect(dispatched).toEqual([requestedUser(), requestedUserError()])
    requestAuthors.mockClear()
  })
})
