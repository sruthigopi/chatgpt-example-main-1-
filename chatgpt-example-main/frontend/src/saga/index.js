import { all } from "redux-saga/effects";
import Axios from "axios";
import { fetchMessageWatcher } from "./chat";
import {AccessToken} from '../components/pageLayout'

export let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${AccessToken}`,
    },
  });
};

export default function* rootSaga() {
  yield all([fetchMessageWatcher()]);
}
