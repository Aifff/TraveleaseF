import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//styling
import {Button} from '@chakra-ui/react'
import './singlecard.css'

const SingleCard = ({ City, Type, Name, Speciality, Locatioon, Details, Picture, Rlink}) => {

  const [preFilledMessage, setPreFilledMessage] = useState("");
  const navigate = useNavigate();

  const handleSendToChat = (Name, Location) => {

    console.log(Name, Location)

    setPreFilledMessage(`Hey guys, need some suggestions on ${Name}, ${Location}, how good is it?`);
  };

  useEffect(() => {
    if (preFilledMessage !== "") {

      navigate(`/chat/${encodeURIComponent(preFilledMessage)}`);
      navigate(`/chat/${encodeURIComponent(preFilledMessage)}`);

      // navigate(`/chat?preFilledMessage=${encodeURIComponent(preFilledMessage)}`);
      // navigate(`/chat?preFilledMessage=${preFilledMessage}`);
    }

    console.log(preFilledMessage)

  }, [preFilledMessage, navigate]);


  return (
    <>
      {/* <div className ="cards"> */}
        <li>
          <div className="card">
            <img
              src="https://i.imgur.com/oYiTqum.jpg"
              className ="card__image"
              alt="background-image"
            />
            <div className="card__overlay">
              <div className ="card__header">
                <svg className ="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                {/* <img
                  className ="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt="profile image or logo"
                /> */}
                <div className ="card__header-text">
                  <h3 className ="card__title">{Name}</h3>
                  <span className ="card__status">Speciality:{Speciality}</span>
                </div>
              </div>
              <p className ="card__description">
                {Details}
              </p>


              <div className="cardButtons">
                <button className="btn btn-primary" onClick={() => handleSendToChat(Name, Locatioon)}>Ask a local</button>

                <button className="btn btn-primary" onClick={() => window.location.href = Rlink}>Know more</button>
              </div>
              
            </div>
          </div>
        </li>
      {/* </div> */}
    </>
  );
};

export default SingleCard;
