import React from 'react';
import './App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import data from "./components/emp.json";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter";
import "react-bootstrap-table-next/dist/react-bootstrap-table-next";


const employees = data.data;

const columns = [
  {
      "dataField": "ID",
      "text": "Employee ID",
      "sort": true
  },
  {
      "dataField": "First Name",
      "text": "First Name",
      "sort": true,
      "filter": textFilter({
        placeholder: 'Search by..'
      })
  },
  {
      "dataField": "Last Name",
      "text": "Last Name",
      "sort": true
  },
  {
      "dataField": "Email",
      "text": "Email",
      "sort": true
  },
  {
      "dataField": "Department",
      "text": "Department",
      "sort": true
  }
];

function App() {
  return (
    <div className="App">
      <BootstrapTable keyField="ID" data={employees} columns={columns} filter={ filterFactory() }></BootstrapTable>
    </div>
  );
}

export default App;
