import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import FormInputs from './cityformInputs';


const CreateCard = ({ onClose, user }) => {

  const suggestionsCity = [
    "Hyderabad",
    "Chicago",
    "Mumbai",
    "Chennai",
    "Banglore",
    "Denmark"
  ];

  // const suggestionsType = [
  //   "Food",
  //   "Hotel",
  //   "Siteseeing",
  //   "Travel",
  // ];

  const [City, setCity] = useState("");
  const [Type, setType] = useState('');
  const [Name, setName] = useState('');
  const [Speciality, setSpeciality] = useState('');
  const [Locatioon, setLocatioon] = useState('');
  const [Details, setDetails] = useState('');
  const [Picture, setPicture] = useState('');
  const [Rlink, setRlink] = useState('');

  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  
  const handleSaveBook = () => {


    const data = { City, Type, Name, Speciality, Locatioon, Details, Picture, Rlink, user };

    console.log(user)
    
    console.log(data)

    const API_URL = process.env.REACT_APP_API_URL;

    // useEffect(() => {
      setLoading(true);

      axios
        .post(`${API_URL}/addNewCard`, data)
        // .post(`https://travelease-b.vercel.app/addNewCard`, data)
        // .post(`http://localhost:4000/addNewCard`, data)
        .then(() => {
          setLoading(false);
          enqueueSnackbar('Book Created successfully', { variant: 'success' });
          console.log('Book created succesfully')
          navigate('/');
          // onclose();
          window.alert('Card created succesfully')
        })
        .catch((error) => {
          setLoading(false);
          // alert('An error happened. Please Check console'); //for admin-testing
          enqueueSnackbar('Error', { variant: 'error' });
          console.log(error.response);
          window.alert('Card creation failed succesfully.')
        });

      onClose();
      // }, [API_URL]
      
    // );
  }

  return (
    <div className='p-4'>
      {/* <BackButton /> */}
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>


        <div>
          <p className='text-xl mr-4 text-gray-500'>Select city</p>
          <FormInputs suggestions={suggestionsCity} setCity={setCity} />
        </div>

        <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Type of establishment</p>
          <select
            value={Type}
            onChange={(e) => setType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value="">Select Type</option>
            <option value="Food">Food</option>
            <option value="Hotel">Hotel</option>
            <option value="Travel">Travel</option>
            <option value="Siteseeing">Siteseeing</option>
          </select>
        </div>


        <div className='my-4'>    
          <p className='text-xl mr-4 text-gray-500'>Name</p>
          <input
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name of establishment'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Whats is it known for?</p>
          <input
            type='text'
            value={Speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder='Enter the speciality'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Details</p>
          <input
            type='text'
            value={Details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder='Enter any other details necessary'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Location</p>
          <input
            type='text'
            value={Locatioon}
            onChange={(e) => setLocatioon(e.target.value)}
            placeholder='Enter locality of the establishment'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Link to redirect to the place:</p>
          <input
            type='text'
            value={Rlink}
            onChange={(e) => setRlink(e.target.value)}
            placeholder='Copy paste a website/reference link of the establishment'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>

        {/* <div className='my-4'>
          <p className='text-xl mr-4 text-gray-500'>Picture:</p>
          <input
            type='text'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name of establishment'
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div> */}

        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateCard