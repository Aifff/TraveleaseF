import React from 'react';

//styling
import { Text, Box } from '@chakra-ui/react';

const Notification = ({ message }) => {
  return (
    <div className="notification" style={{height: "calc(100vh - 100px)"}}>
      <div className='blank'></div>
      <Box style={{borderRadius:"25px", background:"#59a7b3", margin:"10px"}} >
        <Text style={{padding: "15px"}} center>{message}</Text>
      </Box>
    </div>
  );
};

export default Notification;