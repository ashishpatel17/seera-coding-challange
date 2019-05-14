import { call, put } from "redux-saga/effects";

const API_ROOT = "https://api.myjson.com/bins/tl0bp";
export function* fetchHotels(action) {
  try {
    const res = yield fetch(API_ROOT)
    const result = yield res.json();
    yield put({ type: 'HOTEL_LIST', result });
  } catch (err) {
    yield put({ type: 'HOTEL_LIST_ERROR', error: err });
  }
}
