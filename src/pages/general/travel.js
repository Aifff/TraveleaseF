import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';

import SingleCard from '../components/SingleCard';

const Travel = ({selectedCity}) => {
  
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(selectedCity)

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${selectedCity}/travel`)
      // .get(`https://travelease-b.vercel.app/${selectedCity}/travel`)
      // .get(`http://localhost:4000/${selectedCity}/travel`)
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
          <h2>Tours and Travels in {selectedCity}</h2>
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
              (<h3>No travel services available currently.</h3>)
            }
            </>
          )}
        </>
      )
      :
      (<h3>Please select a city to check out its travel services.</h3>)
    }
    </div>
  )
}

export default Travel