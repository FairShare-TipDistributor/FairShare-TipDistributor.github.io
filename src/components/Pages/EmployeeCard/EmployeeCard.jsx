import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const image = 'https://media.licdn.com/dms/image/D5635AQFI-fq-7L0lFQ/profile-framedphoto-shrink_200_200/0/1706133354575?e=1712012400&v=beta&t=zQYxv-z3sXg-FXFzX3qoW2EbD9pxTvP22NbnfFV5oTQ'

function EmployeeCard(employeeProp) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  


  





// console.log('employeeProp.employeeProp.first_name', employeeProp.employeeProp.first_name);
  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: .5, marginBottom: .5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 50, padding: .5 }}
        image={image}
        alt="Image"
      />
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

      {/* <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
              <Button variant="text" type='submit' ><MoreHorizIcon /></Button>
          </Typography>
      </CardContent> */}
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <CardActions disableSpacing>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }} >
          <div>
          <Typography  paragraph>First Name:</Typography>
          <TextField></TextField>
          </div>
          <div>
          <Typography paragraph>Last Name:</Typography>
          <TextField></TextField>
          </div>
          <div>
          <Typography paragraph>Email:</Typography>
          <TextField></TextField>
          </div>
        </CardContent>
      </Collapse>
    </Card>
    </>
    

  );
}

export default EmployeeCard;
