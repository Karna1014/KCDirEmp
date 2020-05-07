import React, { Component } from "react";
import data from "./Employee.json";

// import "./style.css";

class Table extends Component {
  // Setting the component's initial state
  state = {
      currentSort: 'default'
  };

  sortTypes = {
      up: {
          fn: (a,b) => a.ID - b.ID
      },
      down: {
          fn: (a,b) => b.ID - a.ID
      },
      default: {
          fn: (a,b) => a
      }
  }

  getSortOrder(reference) {
      return function(a,b) {
          if (a[reference] > b[reference]) {
              return 1;
          } else if (a[reference] < b[reference]) {
              return -1;
          } else {
              return 0;
          }
      }
  }

  sort = (reference) => {
      const { currentSort } = this.state;

      let nextSort;

      if (currentSort === 'down') nextSort = 'up';
      else if (currentSort === 'up') nextSort = 'default';
      else if (currentSort === 'default') nextSort = "down";

      this.setState({
          currentSort: nextSort
      })
  }

  render() {
    const {currentSort} = this.state;

    return (
      <div className="container">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>
                  <button onClick={this.onSortChange}>ID</button>
              </th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              [...data.data].sort(this.sortTypes[currentSort].fn).map((emp) => (
                <tr key={emp['id']}>
                  <td>{emp['id']}</td>
                  <td>{emp['first_name']}</td>
                  <td>{emp['last_name']}</td>
                  <td>{emp['email']}</td>
                  <td>{emp['title']}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table