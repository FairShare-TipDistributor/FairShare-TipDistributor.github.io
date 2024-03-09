// import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { useEffect } from 'react';


function EmployeesPage() {
   
      const store = useSelector((store) => store);
      const employeesStore = useSelector(store => store.employees);
    console.log('employeesStore (empPage)', employeesStore);
    // Using hooks we're creating local state for a "heading" variable with
//   const [heading, setHeading] = useState('Employees Page (State heading)');
const dispatch = useDispatch();


useEffect(() => {
    dispatch({ type: 'FETCH_EMPLOYEES' });
  }, []);

  
//   const emplyeesTestArray = [[1,'dave'], [3,'tom'], [14,'bob'], [2,'dale']]; 
  // swap 'employeesStore' with 'emplyeesTestArray' to test basic .mp functionality. 
    // must also change employee.id & employee.name to employee[0] (array index's)
    

  return (
    <div>
        <h3>Employees Management Page</h3>
        <ul>
            {employeesStore && employeesStore.map((employee, index) => {
                console.log(`EmployeeIndex_${index}_${employee.id}`);
                console.log('tacoItem', employee);
                return (
                    <li key={index}># {employee.id}:  Name: {employee.name}</li>
                )
            })}
        </ul>

    </div>
  );
}

export default EmployeesPage;
