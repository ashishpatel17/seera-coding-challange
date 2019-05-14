import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchHotels } from "./hotels";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'FETCH_HOTELS', fetchHotels)
  ];
}
