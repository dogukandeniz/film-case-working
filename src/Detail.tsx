
import {
    useParams
} from "react-router-dom";
import React, { useEffect } from "react";
import {detailRequestAction} from './_actions'
import './Detail.scss';

import  { useDispatch,useSelector } from "react-redux";

function Detail() {

    let { id } = useParams();
    const dispatch = useDispatch();
    const detailReducer = useSelector((state:any) => state.detail)


    useEffect(()=>{
        dispatch(detailRequestAction(id))
    },[])

    const resultContent = () => {
        
        if(detailReducer.loading){
            return (
                <div className="loading">Loading</div>
            )
        }else{
            if(detailReducer.item !== ""){
            return(
                <div className="detail-content">
                    <div className="c-column-01">
                        <img src={detailReducer.item.Poster} />
                    </div>

                    <div className="c-column-02">
                        <div className="c-item-01">Title : {detailReducer.item.Title}</div>
                        <div className="c-item-01">Actors : {detailReducer.item.Actors}</div>
                        <div className="c-item-01">Writer : {detailReducer.item.Writer}</div>
                        <div className="c-item-01">Total Seasons : {detailReducer.item.totalSeasons}</div>
                    </div>
                </div>
            )

            }

        }

    }


    return (
        <div className="App">
          <div className="c-wrapper">


              {resultContent()}
          </div>
        </div>
    );
}

export default Detail;
