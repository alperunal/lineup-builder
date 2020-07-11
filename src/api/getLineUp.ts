/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API } from 'constants/constants';

export function getLineUp(setPlayers: void) {
    return axios.get(`${API}/getLineUp`)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
}
