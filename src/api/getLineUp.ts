/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API } from 'constants/constants';

export function getLineUp() {
    return axios.get(`${API}/getLineUp`, {
        headers: {
            accept: "Accept: application/json",
        }
    });
}
