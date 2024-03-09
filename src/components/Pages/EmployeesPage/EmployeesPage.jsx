import React, { useState } from 'react';
// import {useSelector} from 'react-redux';


function EmployeesPage(props) {
   
    //   const store = useSelector((store) => store);
    
    // Using hooks we're creating local state for a "heading" variable with
  const [heading, setHeading] = useState('Employees Page (State heading)');

  return (
    <div>
      <h2>{heading}</h2>
        <h3>Employees Page</h3>
        

    </div>
  );
}

export default EmployeesPage;
