import React, { useEffect,useState } from "react";
import  { useDispatch,useSelector } from "react-redux";
import './App.scss';
import {initSearchFilterRequestAction,searchFilterRequestAction} from './_actions'
import { BrowserRouter as Router, Link } from "react-router-dom";
function App() {

  const dispatch = useDispatch();
  const searchReducer = useSelector((state:any) => state.search)

  const [title, setTitle] = useState("Pokemon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [page, setSelectedPageNumber] = useState(1);

  useEffect(()=>{
    dispatch(initSearchFilterRequestAction())
  },[])


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
    if(title===""){
      alert("title field is required");
    }
    setSelectedPageNumber(1)
    sendFilterAction();
  }

  const handeClearFilter = () => {
    setYear("")
    setTitle("Pokemon")
    setType("")
    setSelectedPageNumber(1)
    dispatch(initSearchFilterRequestAction())
  }

  const handlePageChange = (e:any) => {
    setSelectedPageNumber(Number(e.target.value))
    sendFilterAction();
  }

  const resultContent = () => {
    if(searchReducer.loading){
      return (
          <div className="loading">Loading</div>
      )
    }else{
      if(searchReducer.items && searchReducer.items.length){

        return searchReducer.items.map((item:any,index:number) => {
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
    for (let i = 1; i < searchReducer.totalPageNumber+1; i++) {
       items.push(<option key={i}  value={i}>{i}</option>)
    }
    return <div className="page-number">
      <select onChange={(e) => handlePageChange(e)} value={page}>
        {
          items
        }
      </select>
    </div>

  }
  return (
    <div className="App">
      <div className="c-wrapper">
       <div className="table">
         <div className="table-header">
           <div className="filter-area">
             <div className="filter-item">
               <label htmlFor="title">Title</label>
               <input itemType="text"  id="title" name="title" placeholder="Title.." value={title} onChange={ (e) => setTitle(e.target.value)} />
             </div>
             <div className="filter-item">
               <label htmlFor="year">Year</label>
               <input itemType="text"  id="year" name="year" placeholder="Year.." value={year} onChange={ (e) => setYear(e.target.value)}/>
             </div>
             <div className="filter-item">
               <label htmlFor="type">Type</label>
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
           <div className="total-count">total items <span>{searchReducer.totalPageCount}</span></div>
            {PaginationField()}
         </div>
       </div>
      </div>
    </div>
  );
}

export default App;
