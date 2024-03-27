import React, { useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Tooltip, Select } from "@chakra-ui/react";

//icons
import { BookPlus } from 'lucide-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, useDisclosure
} from '@chakra-ui/react'

import Login from './login.js'
import CreateCard from "./createcard.js";
import { px } from "framer-motion";

const Navbar = ({isAuth, setIsAuth, setIsInChat, setSelectedCity, selectedCity}) => {

  const { isOpen, onOpen, onClose } = useDisclosure() // for modal from chakraUI

  const [user, setUser] = useState();
  console.log(user);

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    // history.push(`/${event.target.value}`); // to be used when redirecting to individual page for each city
  };

  // const [selectedCity, setSelectedCity] = useState('');
  // // const history = useHistory();

  // const handleChange = (event) => {
  //   setSelectedCity(event.target.value);
  //   // history.push(`/${event.target.value}`); // to be used when redirecting to individual page for each city when using firebase
  // };

  return (
    <div className="subNav">


      <nav className="  navbar navbar-expand-lg">

        <div className="col-xl-2"><h2 className="logo"><a href="/">T</a></h2></div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/chat" className="nav-link">Chat</Link>
            </li>

            <li className="nav-item">
              <Tooltip label="Coming soon!">
                <Link to="" style={{cursor: "no-drop" }} className="nav-link">
                  <span style={{ color: "purple"}}>AI</span>tenary
                </Link>
              </Tooltip>
            </li>

            <li className="nav-item">
              <Link to="/food" className="nav-link">Food</Link>
            </li>

            <li className="nav-item">
              <Link to="/accomodation" className="nav-link">Accomodation</Link>
            </li>

            <li className="nav-item">
              <Link to="/travels" className="nav-link">Travels</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/siteseeing" className="nav-link">SiteSeeing</Link>
            </li>

          </ul>

          <div className="navButtons col-xl-2 col">
          <Tooltip label='Create a card' >
            {/* <Button className="plusButton" onClick={onOpen}> */}
              <BookPlus className="plusButton" onClick={isAuth? onOpen: () => window.alert('Please login to add')} />
            {/* </Button> */}
          </Tooltip>
          <Modal isOpen={isOpen} onClose={onClose}  isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />

              <CreateCard onClose={onClose} user={user}/>

            </ModalContent>
          </Modal>
          
          <Tooltip label='Select your city'>
            <Select placeholder="City" value={selectedCity} onChange={handleChange}>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Banglore">Banglore</option>
              <option value="New york">New York</option>
              <option value="Chicago">Chicago</option>
              <option value="Chennai">Chennai</option>
              <option value="Denmark">Denmark</option>
              <option value="Seoul">Seoul</option>
            </Select>
          </Tooltip>

          <button>
            <Login isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat} setUser={setUser}/>
          </button>

          </div>
          
        </div>

        

      </nav>

      <h1 className="navbarHeader col-8" >Travelease</h1>


    </div>
  );
};

export default Navbar;
