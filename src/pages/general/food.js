import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

import SingleCard from '../components/SingleCard';

const Food = ({selectedCity}) => {
  
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(selectedCity)

  const API_URL = process.env.REACT_APP_API_URL;


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${selectedCity}/Food`)
      // .get(`https://travelease-b.vercel.app/${selectedCity}/Food`)
      // .get(`http://localhost:4000/${selectedCity}/Food`)
      .then((response) => {
        setBook(response.data.data);        //data is received and stored in 'book' state variable
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    }, [selectedCity, API_URL]
  );
    
    
  console.log(book)

  return (
    <div className='p-4 m-4' style={{minHeight:"70vh"}}> 
    {selectedCity? 
      ( <>
          <h2>Eateries in {selectedCity}</h2>
          {loading ? (
            <Spinner />
          ) : (
            <>
            { book.length > 0 ? 
              (
                <div className='cards'>
                  {book.map((item) => (
                        <SingleCard 
                        City={item.City} Type={item.Type} Name={item.Name} Locatioon={item.Locatioon} Speciality={item.Speciality} Details={item.Details} Picture={item.Picture} Rlink={item.Rlink}
                        />
                    ))}
                </div>
              )
              :
              (<h3>No munching places available in {selectedCity} currently.</h3>)
            }
            </>
          )}
        </>
      )
      :
      (<h2>Please select a city to check out its lip-smacking flavours.</h2>)
    }
    </div>
  )
}

export default Food