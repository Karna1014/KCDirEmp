 import React from 'react';
 import './App.css';
//  import Table from "./components/index";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import data from "./components/Employee.json";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table-next";


const employees = data;

const columns = [
  {
      "dataField": "id",
      "text": "Employee ID",
      "sort": true
  },
  {
      "dataField": "first_name",
      "text": "First Name",
      "sort": true,
      "filter": textFilter({
        placeholder: 'Search by..'
      })
  },
  {
      "dataField": "last_name",
      "text": "Last Name",
      "sort": true
  },
  {
      "dataField": "email",
      "text": "Email",
      "sort": true
  },
  {
      "dataField": "title",
      "text": "Title",
      "sort": true
  }
];



function App() {
  return (
    <div className="App">
     <BootstrapTable keyField="id" data={employees} columns={columns} filter={ filterFactory() }></BootstrapTable>
    </div>
  );
}

export default App;
