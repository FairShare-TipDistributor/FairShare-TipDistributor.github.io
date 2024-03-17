import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// import { useTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const image = 'https://media.licdn.com/dms/image/D5635AQFI-fq-7L0lFQ/profile-framedphoto-shrink_200_200/0/1706133354575?e=1711249200&v=beta&t=qyIzjLd5uqCwU8TmrG4gvN5A-sRIQqz9Ut4ZQ6CKDSY'

function EmployeeCard(employeeProp) {

  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');
console.log('employeeProp.employeeProp.first_name', employeeProp.employeeProp.first_name);
  return (
    <>
      <Card sx={{ display: 'flex', width: '100%', height: '4rem', marginTop: .5, marginBottom: .5 }}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 50, padding: .5 }}
        image={image}
        alt="Image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto',   padding: 1}}>
          <div>

          <Typography component="div" variant="body1">
           {employeeProp.employeeProp.first_name} {employeeProp.employeeProp.last_name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div" >
            Server
          </Typography>
          </div>
          <div>
            
          </div>
        </CardContent>
      </Box>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
              <Button variant="text" type='submit' ><MoreHorizIcon /></Button>
          </Typography>
      </CardContent>
    </Card>
    </>
    

  );
}

export default EmployeeCard;
