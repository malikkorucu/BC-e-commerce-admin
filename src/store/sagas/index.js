import { all } from 'redux-saga/effects';
import { requestRootSaga } from './middleware';

export default function* rootSaga() {
  yield all([requestRootSaga()]);
}
