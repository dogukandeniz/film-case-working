
import {axiosClient}  from '../_helpers/axios'

export const searchService = {
    initRequest,
    filterRequest,
};




function  filterRequest(filterObj){
    let title = filterObj.title;
    let year = filterObj.year;
    let type = filterObj.type;
    let page = filterObj.page;

    return axiosClient.get("", {
        params: {
            s: title,
            y:year,
            type:type,
            page:page,
        }})
        .then(response => {
            console.log("filter",response.data)
            return response.data;
        });
}
function  initRequest(){

    let title ="Pokemon";

    return axiosClient.get("", {
        params: {
            s: title,
        }})
        .then(response => {
            console.log(response.data)
            return response.data;
        });
}
