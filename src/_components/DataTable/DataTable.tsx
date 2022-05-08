import React, { useEffect,useState } from "react";
import  { useDispatch } from "react-redux";
import './DataTable.scss';
import {initSearchFilterRequestAction,searchFilterRequestAction} from '../../_actions'
import { Link } from "react-router-dom";
function DataTable(props:any) {

    debugger;
    const dispatch = useDispatch();

    const [title, setTitle] = useState("Pokemon");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [page, setSelectedPageNumber] = useState("");

    useEffect(()=>{
        dispatch(initSearchFilterRequestAction())
    },[])

    useEffect(()=>{
        sendFilterAction();
    },[page])


    const sendFilterAction = () => {
        const filterObj = {
            title,
            year,
            type,
            page
        }
        dispatch(searchFilterRequestAction(filterObj))
    }

    const handeSearch = () => {
        setSelectedPageNumber("1")
        sendFilterAction();
    }

    const handeClearFilter = () => {
        setYear("")
        setTitle("Pokemon")
        setType("")
        setSelectedPageNumber("1")
        dispatch(initSearchFilterRequestAction())
    }



    const resultContent = () => {
        if(props.items.loading){
            return (
                <div className="loading">Loading</div>
            )
        }else{
            if(props.items.items && props.items.items.length){

                return props.items.items.map((item:any,index:number) => {
                    return(
                        <Link key={index} to={`/detail/${item.imdbID}`} className="result-item">
                            <div className="item">{item.Title}</div>
                            <div className="item">{item.imdbID}</div>
                            <div className="item">{item.Year} </div>

                        </Link>
                    )
                })

            }else{
                return(
                    <div className="noResult">No Result</div>
                )
            }

        }

    }


    const PaginationField = () => {
        let items = [];
        for (let i = 0; i < props.items.totalPageNumber; i++) {
            items.push(<option key={i}  value={i+1}>{i+1}</option>)
        }
        return <div className="page-number">
            <select onChange={(e) => setSelectedPageNumber(e.target.value)} value={page}>
                {
                    items
                }
            </select>
        </div>

    }
    return (
                <div className="table">
                    <div className="table-header">
                        <div className="filter-area">
                            <div className="filter-item">
                                <label htmlFor="title">{props.titleLabel}</label>
                                <input itemType="text"  id="title" name="title" placeholder="Title.." value={title} onChange={ (e) => setTitle(e.target.value)} />
                            </div>
                            <div className="filter-item">
                                <label htmlFor="year">{props.yearLabel}</label>
                                <input itemType="text"  id="year" name="year" placeholder="Year.." value={year} onChange={ (e) => setYear(e.target.value)}/>
                            </div>
                            <div className="filter-item">
                                <label htmlFor="type">{props.typeLabel}</label>
                                <input itemType="text"  id="type" name="type" placeholder="Type..(movies,series or episode)" value={type} onChange={ (e) => setType(e.target.value)} />
                            </div>
                            <div className="action-item">
                                <button  id="sendRequest" className={title === "" ? "disabled": "" } onClick={handeSearch} name="sendRequest">Filter</button>
                                <button  id="clearFilter"  className="filter-clear" onClick={handeClearFilter} name="clearFilter">Clear</button>
                            </div>
                        </div>
                        <div className="column-area">
                            <div className="column-item">
                                Title
                            </div>
                            <div className="column-item">
                                IMDb ID
                            </div>
                            <div className="column-item">
                                Year
                            </div>
                        </div>

                    </div>
                    <div className="table-body">
                        <div className="results">
                            {resultContent()}
                        </div>
                    </div>
                    <div className="table-footer">
                        <div className="total-count">total items <span>{props.items.totalPageCount}</span></div>
                        {PaginationField()}
                    </div>
                </div>
    );
}

export default DataTable;
