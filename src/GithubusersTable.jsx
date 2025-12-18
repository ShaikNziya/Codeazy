import React, { useContext } from "react";
import { GithubusersContext } from "./GithubusersProvider";
import { Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const GithubUsersTable = () => {
  const {users, followers, showFollowers, showFollowersHandler}=useContext(GithubusersContext);

  return (
     <TableContainer component={Paper} sx={{ width: "60%", margin: "20px auto" }}>
       <Typography variant="h4" align="center" sx={{ margin: "20px 0" }}>
        GithubUsers Table
       </Typography>


      <Table border="1" width="60%" align="center">
         <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
         </TableHead>

          <TableBody>
            {users.map((user) =>(
               <TableRow key={user.id}>
                <TableCell>{user.login}</TableCell>
                <TableCell>{user.type}</TableCell>
                <TableCell>{user.site_admin ? 'Yes' : 'No'}</TableCell>
               </TableRow>
            ))}

          </TableBody>

         
      </Table>
       
     </TableContainer>
      
    
  );
};

export default GithubUsersTable;


