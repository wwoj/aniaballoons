import React from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'

const history = ()=>{
  return (
    <div>
      History page
      <DropdownButton id="dropdown-basic-button" title="Lang">
        <Dropdown.Item onClick={()=>{alert("Click 1")}}>Action</Dropdown.Item>
        <Dropdown.Item onClick={()=>{alert("Click 2")}}>Another action</Dropdown.Item>
        <Dropdown.Item onClick={()=>{alert("Click 3")}}>Something else</Dropdown.Item>
      </DropdownButton>
      <select>
          <option>a</option>
          <option>b</option>

      </select>
    </div>
  );
}
export default history;