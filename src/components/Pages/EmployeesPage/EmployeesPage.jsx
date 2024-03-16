// import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';

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

function EmployeesPage() {
   
      const store = useSelector((store) => store);
      const employeesStore = useSelector(store => store.employees);
    console.log('employeesStore (empPage)', employeesStore);
    // Using hooks we're creating local state for a "heading" variable with
//   const [heading, setHeading] = useState('Employees Page (State heading)');
const dispatch = useDispatch();

function handleSubmit(event){
  console.log('event', event);
};

useEffect(() => {
    dispatch({ type: 'FETCH_EMPLOYEES' });
  }, []);

  
//   const emplyeesTestArray = [[1,'dave'], [3,'tom'], [14,'bob'], [2,'dale']]; 
  // swap 'employeesStore' with 'emplyeesTestArray' to test basic .mp functionality. 
    // must also change employee.id & employee.name to employee[0] (array index's)
    

  return (
    <>
    <div className="mainDiv" >

      <Box sx={{ p: 2, border: '1px dashed grey' }} className="employeesBox"
        height='100%' //{200}
        width='100%'
        my={4}
        display="flex"
        alignItems="center"
        gap={4} 
        component="section" >
        <div>

        <h3 style={{ margin: '10px 10px' }}>Employees Management Page</h3>
        <form >
          <TextField id="outlined-basic" label="Search Employee" variant="outlined"  style={{ width: '75%' }}/>
          <Button variant="contained" type='submit' >Search &nbsp;<SearchIcon /></Button>
        </form>
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" /> */}

        <textBox></textBox>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{  fontWeight: 'bold'}} align="left">First Name</TableCell>
                <TableCell style={{  fontWeight: 'bold'}} align="left">Last Name</TableCell>
                <TableCell style={{  fontWeight: 'bold'}} align="left">Employee ID</TableCell>
                <TableCell style={{  fontWeight: 'bold'}} align="left">Email</TableCell>
                {/* <TableCell align="right">Permission Lvl</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>

              {employeesStore && employeesStore.map((employee) => (
                <TableRow
                  key={employee.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{employee.first_name}</TableCell>
                  <TableCell align="left">{employee.last_name}</TableCell>
                  <TableCell align="left">{1234}</TableCell>
                  <TableCell align="left">{employee.email}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </Box>
      </div>
    </>
  );
}

export default EmployeesPage;
