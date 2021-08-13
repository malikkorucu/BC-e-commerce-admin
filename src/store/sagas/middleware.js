import { put, takeEvery } from 'redux-saga/effects';

function* watchRequests(props) {
  const { api, type, body } = props;
  const splitted = type.split('_');
  const actiontype = splitted[splitted.length - 1];

  if (actiontype === 'REQUEST') {
    try {
      const response = yield api(body || {}) || {};
      const actionType = type.replace('REQUEST', 'SUCCESS');
      yield put({ type: actionType, payload: response.data.data });
    } catch (error) {
      const actionType = type.replace('REQUEST', 'ERROR');
      yield put({ type: actionType });
    }
  }
}

function* requestRootSaga() {
  // All redux action listen
  yield takeEvery('*', watchRequests);
}

export { requestRootSaga };
