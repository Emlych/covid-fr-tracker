import React from 'react';
import './App.css';
import {FormControl, MenuItem, Select} from '@material-ui/core';

function App() {
  return (
    <div className="app">
      <h1>Covid-19 France Tracker.</h1>

      <FormControl className="app__dropdown">
        <Select
        variant= "outlined"
        value="localisation">
          <MenuItem value="worldwise">Worldwise</MenuItem>
          <MenuItem value="worldwise">Worldwise</MenuItem>
          <MenuItem value="worldwise">Worldwise</MenuItem>
          <MenuItem value="worldwise">Worldwise</MenuItem>
        </Select>
      </FormControl>


      {/* Header */}
      {/* Title + select input dropdown field + select input dropdown field */}

      {/* Infobox */}
      {/* Infobox */}
      {/* Infobox */}

      {/* Map */}

      {/* Table */}
      {/* Graph */}

    </div>
  );
}

export default App;
