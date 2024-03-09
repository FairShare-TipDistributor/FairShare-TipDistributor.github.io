import React, { useState } from 'react';
// import {useSelector} from 'react-redux';


function EmployeesPage(props) {
   
    //   const store = useSelector((store) => store);
    
    // Using hooks we're creating local state for a "heading" variable with
  const [heading, setHeading] = useState('Employees Page (State heading)');


  const emplyeeArray = [[1,'dave'], [3,'tom'], [14,'bob'], [2,'dale']];
    

  return (
    <div>
      <h2>{heading}</h2>
        <h3>Employees Management Page</h3>
        <ul>
            {emplyeeArray && emplyeeArray.map(tacoItem => {
            console.log(tacoItem);
                return (
                    <li># {tacoItem[0]}:  Name: {tacoItem[1]}</li>
                    
                )
            })}
        </ul>

    </div>
  );
}

export default EmployeesPage;
