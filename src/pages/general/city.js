import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

import CardPage from './homeCardpage';

const City = ({selectedCity}) => {
  
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(selectedCity)

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/${selectedCity}`)
      .then((response) => {
        setBook(response.data.data);        //data is received and stored in 'book' state variable
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    }, [selectedCity]);
    
    
    console.log(book)


  return (
    <div className='p-4'> 
      <h1>Test ccchange</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <CardPage book={book} />
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>
          <p>Testing</p>

          
        </div>
      )}
    </div>
  )
}

export default City