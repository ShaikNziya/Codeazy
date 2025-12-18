import React, { useContext } from "react";
import { GithubusersContext } from "./GithubusersProvider";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const GithubUsers = () => {
  const{users, followers, showFollowers, showFollowersHandler} = useContext(GithubusersContext);
  

   
  return (
    <Box>
      <Typography variant="h4" align="center" >
        Github Users
      </Typography>

      {users.map((user, index) => (
        <Card key={user.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar src={user.avatar_url} />
              <Typography variant="h6">{user.login}</Typography>
              <Typography variant="h6">{user.type}</Typography>
            </Box>

            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => showFollowersHandler(user.id, user.followers_url)}
            >
              {showFollowers[user.id] ? "Hide Followers" : "Show Followers"}
            </Button>

            {showFollowers[user.id] && (
              <List>
                {followers[user.id]?.map((follower) => (
                  <ListItem key={follower.id}>
                    {follower.login}
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      ))}




       
    </Box>
      

                        
    );
}

export default GithubUsers;















