import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate }from 'react-router-dom';

const App =() =>{
    const navigate = useNavigate();
    return(
       <Box>
         <Typography variant='h3'>
            Githubusers
         </Typography>
         <Button 
            onClick={() => navigate('/githubusers')}
        
               variant='contained' color='primary' style={{margin:'10px'}}>
              <Typography variant='h6' align='center'>
                Githubusers
              </Typography>
         </Button>
          <Button 
             onClick={() => navigate('/githubusers-table')}
        
                 variant='contained' color='primary' style={{margin:'10px'}}>
                   <Typography >
                       Githubusers Table
                 </Typography>
        </Button>
       </Box>
        
   

    )
}
export default App;
