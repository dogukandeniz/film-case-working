import React  from "react";
import  { useSelector } from "react-redux";
import DataTable from './_components/DataTable/DataTable'
function App() {

  const searchReducer = useSelector((state:any) => state.search)


  return (
    <div className="App">
      <div className="c-wrapper">
      <DataTable
          items={searchReducer}
          typeLabel="Type"
          titleLabel="Title"
          yearLabel="Year"
      />
      </div>
    </div>
  );
}

export default App;
