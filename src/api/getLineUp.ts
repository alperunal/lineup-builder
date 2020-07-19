/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { api } from 'constants/constants';

export function getLineUp() {
    return axios.get(`${api}/getLineUp`, {
        headers: {
            accept: "Accept: application/json",
        }
    });
}
