const employees = (state = [], action) => {
    switch (action.type) {
        case 'SET_EMPLOYEES':
            // console.log('Employees.state', (state.length <1 ? '[empty]' : state), '(reducer)' );
            // console.log('Employees action.payload (reducer)', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default employees;