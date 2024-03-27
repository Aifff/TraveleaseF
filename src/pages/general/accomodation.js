import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Text } from '@chakra-ui/react';

import SingleCard from '../components/SingleCard';

const Accomodation = ({selectedCity}) => {
  
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(selectedCity)

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://travelease-b.vercel.app//${selectedCity}/hotel`)
      // .get(`http://localhost:4000/${selectedCity}/hotel`)
      .then((response) => {
        setBook(response.data.data);        //data is received and stored in 'book' state variable
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    }, [selectedCity]
  );
    
    
  console.log(book)

  return (
    <div className='p-4 m-4'> 
      <h2>Stay in {selectedCity}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className='cards'>
          {book.map((item) => (
                <SingleCard 
                City={item.City} Type={item.Type} Name={item.Name} Locatioon={item.Locatioon} Speciality={item.Speciality} Details={item.Details} Picture={item.Picture} Rlink={item.Rlink}
                />
            ))}
        </div>
      )}
    </div>
  )
}

export default Accomodation