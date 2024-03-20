// import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';

import EmployeeCard from "../EmployeeCard/EmployeeCard"
import AddEmployee from "../AddEmployee/AddEmployee"

// ------ MUI ELEMENTS ------ //
import { Box, Button, TextField } from '@mui/material'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import "../../Pages/LoginAndRegisterPages/LoginAndRegister.css"


function EmployeesPage() {
   
      const store = useSelector((store) => store);
      const employeesStore = useSelector(store => store.employees);
      let [trueFalse, setTrueFalse] = useState(false);

      const [searchInput, setSearchInput] = useState("");

const dispatch = useDispatch();


const searchEmployee = (value) => {
  setSearchInput(value); // set useState
  fetchEmployees(value); // fetch employees 
}

function fetchEmployees(value) {
  // event.preventDefault();
  const searchItem = {
    searchInput: '-searchAll-'
  };
  if (value.length && value.length > 0 ) {
    searchItem.searchInput = value
    console.log('value.length > 0,', value);
  } else {
    searchItem.searchInput = '-searchAll-'
    console.log('value.length < 0,', value);
  }
  
  console.log('searchItem sent:', searchItem);
  dispatch({
    type: "FETCH_EMPLOYEES",
    payload: searchItem,
  });
};


const toggleIsActive = () => {
  setTrueFalse(trueFalse => !trueFalse)
  // console.log('trueFalse', trueFalse);
  // let boolean = trueFalse
  // setTrueFalse = (!boolean)
  // console.log('boolean', boolean);
}

useEffect(() => {
// fetchEmployees('-searchAll-');
    dispatch({ 
      type: 'FETCH_ALL_EMPLOYEES',
    });
  }, []);


  
  return (
      <Box sx={{ p: 2 }} className="employeesBox"
        height='100%' //{200}
        width='100%'
        my={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={0} 
        component="section" 
        // padding="10px"
        >
    

        <h3 style={{ margin: '10px 10px' }}>Employees Management Page</h3>
        {/* <form style={{ width: '100%' }}>
          <TextField id="outlined-basic" label="Search Employee" variant="outlined"  style={{ minWidth: '50%', maxWidth: '75%' }}/>
          <Button variant="contained" type='submit' >Search &nbsp;<SearchIcon /></Button>
        </form> */}
        <div className="formPanel">
          <form className="searchForm">
              <div className="searchDiv">
                  {/* <label htmlFor="searchInput " style={{ fontWeight: 700 }} > Search Employee </label> */}
                  <div className="login-input-box inputHeight">
                    <input 
                      id="login-input"
                      type="text"
                      name="searchInput"
                      required
                      placeholder="Search Employee"
                      value={searchInput} 
                      onChange={(event) =>
                        searchEmployee(event.target.value)
                      }
                  />
                  </div>
              </div>
              {/* <PrimaryButton id="addEmployee" className="submitButton" text="Search"  /> */}
          </form>
        </div>
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" /> */}

        {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell id="thFirstName" style={{  fontWeight: 'bold'}} align="left">First Name</TableCell>
                <TableCell id="thLastName" s style={{  fontWeight: 'bold'}} align="left">Last Name</TableCell>
                <TableCell id="thEmpId" s style={{  fontWeight: 'bold'}} align="left">Employee ID</TableCell>
                <TableCell id="thEmail" s style={{  fontWeight: 'bold'}} align="left">Email</TableCell>
                <TableCell id="thEdit" s style={{  fontWeight: 'bold'}} align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {employeesStore && employeesStore.map((employee) => (
                <TableRow 
                  key={employee.name} 
                  sx={{ '&:last-child td, &:last-child th': { border: 0, } }}
                >
                  <TableCell component="th" scope="row">{employee.first_name}</TableCell>
                  <TableCell align="left">{employee.last_name}</TableCell>
                  <TableCell align="left">{1234}</TableCell>
                  <TableCell align="left">{employee.email}</TableCell>
                  <TableCell align="left"> <Button variant="text" type='submit' ><MoreHorizIcon /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        <TableContainer>
          <Table>
            {employeesStore && employeesStore.map((employee) => (
            <TableRow>
                <EmployeeCard employeeProp={employee}/>
            </TableRow>
            ))}
          </Table>
          {trueFalse == false ?  
              <Button style={{ marginTop: '10px', marginBottom: '10px' }} 
              variant="contained" 
              type='submit'
              onClick={toggleIsActive}
              ><AddCircleOutlineIcon /> &nbsp; Add Employee</Button>
              : 
              <> 
              <Button style={{ marginTop: '10px', marginBottom: '10px' }} 
                  variant="contained" 
                  type='submit'
                  onClick={toggleIsActive}
              ><AddCircleOutlineIcon /> &nbsp; Close</Button>
                  <AddEmployee /> 
              </>
          }
        </TableContainer>

     
      </Box>
  );
}

export default EmployeesPage;
