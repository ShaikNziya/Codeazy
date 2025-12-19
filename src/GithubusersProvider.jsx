import React, { createContext,  useEffect, useState } from "react";
export const GithubusersContext = createContext();


const GithubUsersProvider = ({ children }) => {
   const [users, setUsers] = useState([]);
   const [followers, setFollowers] = useState([]);
   const [showFollowers, setShowFollowers] = useState(false);
  

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);



 
  const showFollowersHandler = async (userId, url) => {

    setShowFollowers((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));

   
    if (followers[userId]) return;

    const response = await fetch(url);
    const data = await response.json();

    setFollowers((prev) => ({
      ...prev,
      [userId]: data.slice(0, 5),
    }));
  };




  return (
    <GithubusersContext.Provider value={{ users, followers, showFollowers, showFollowersHandler }}>
      {children}
    </GithubusersContext.Provider>
  );
};

  export default GithubUsersProvider;
