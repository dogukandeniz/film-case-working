
import {axiosClient}  from '../_helpers/axios'

export const detailService = {
    getDetailRequest
};

function  getDetailRequest(id){

    return axiosClient.get("", {
        params: {
            i: id,
        }})
        .then(response => {
            console.log(response.data)
            return response.data;
        });
}