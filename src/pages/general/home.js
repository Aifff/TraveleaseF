import React, {useEffect, useState} from "react";
import axios from 'axios';

import { Select } from "@chakra-ui/react";


import { useRef } from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

// import {db} from '../firebase/firebase'
// import { collection } from "firebase/firestore"; //( import "firebase/firestore" for db.collection() to work)
// import { useCollectionData } from 'react-firebase-hooks/firestore';

import CardPage from './homeCardpage'


import { ReactComponent as ChatSVG } from '../../assets/ChatSVG.svg';
import { ReactComponent as AdvantureMapSVG } from '../../assets/AdventureMap.svg';

import {
  Container,
  Box,
  Flex,
  Text,
  Card,
  Button,
  ButtonGroup,
  CardFooter,
  Divider, 
  Heading,
  Stack,
  Image,
  CardBody,
  Tooltip,
} from "@chakra-ui/react";


const Home = ({City, setSelectedCity, selectedCity}) => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  //for dropdown
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    // history.push(`/${event.target.value}`); // to be used when redirecting to individual page for each city
  };

  const API_URL = process.env.REACT_APP_API_URL;
  
  
  
  
  useEffect(() => {
    setLoading(true);
    
    console.log(process.env.API_URL)
    console.log(API_URL)
    
    axios
      .get(`${API_URL}/${City}`)
      // .get(`https://travelease-b.vercel.app/${City}`)
      // .get(`http://localhost:4000/${City}`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [City, API_URL]);


  // background
  const vantaRef = useRef(null);
  useEffect(() => {

    // const vantaEffect = BIRDS({
    //   el: vantaRef.current,
    //   backgroundColor:  0X25717d,
    //   height:400
    // });

    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      height:550,
      minWidth: 200.00,
      cloudColor: 0x95b4d2,
      skyColor: 0x25717d,
      // height: 100.00,
      // aspectRatio:300/500,
      scale:10,

    })

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);




  return (
    <div className="home w-100">
      
      <Box>

        <div ref={vantaRef} className="hero">

          <div className="w-100">
            <h1 className="w-100 heroHeader">Travelease</h1>
          </div>

          <div className="AdventureMapSVG">
            <AdvantureMapSVG />
          </div>

          <div className="subhero">
            <p>A virtual travel guide for all your trips.<br /><span>Meticulously curated by the city locals</span></p>
            {/* <button href='#start'>Explore a city</button> */}
          </div>

        </div>

          <div className="hero2">
            <div className="hero2p">
              <p><span>Visiting a new place?</span><br /> Know all you need to, from the locals themselves.</p>

              <div className="hero2list">
                <ChatSVG />
                
                <ul>
                  <li>Select the city/town you are visiting</li>
                  <li>Checkout all the recommendations, categorized to convenience</li>
                  <li>Still need a suggestion or opinion? Ask a localite</li>
                  <li><Tooltip label="coming soon"><span>Let our AI-powered Travel guide- AItenary plan your trip!!!</span></Tooltip></li>
                  {/* <li>Not sure which to choose? Take a second opinion directly from a localite.</li> */}
                </ul>

              </div>
            </div>
          </div>

          {/* <p>A local virtual guide, without the hassle of a hiring one.</p>


          <p>Tap into the insights of local residents for authentic and personalized recommendations.</p>
          <p>Connect directly with locals to receive firsthand recommendations.</p>

          <p>Just select the city/town you are visitng, and <span>get genuine recommendations right from the regional residents</span></p>        
          <p>Plainning a trip? Let our AI-powered Travel guide- AItenary handle it!!!</p> */}
        
        <div id="start" className="homeCard">
          {City?
            <CardPage book={books} />
            :
            <div className="noCard">
              <div>
                <h3 className="noCardHeading">Begin your journey now</h3>
                <p className="noCardSubtitle"> Lets plan it!!!</p>
              </div>
              <div className="noCardLink">
                <p>Choose the place you are visiting and begin your journey</p>

                <Select placeholder="City" value={City} onChange={handleChange}>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Banglore">Banglore</option>
                  <option value="New york">New York</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Seoul">Seoul</option>
                </Select>
              
              </div>
              {/* <p>Make your trip experience effortless</p> */}
            </div>
          }
        </div>
      </Box>
    </div>
  );
};

export default Home;
