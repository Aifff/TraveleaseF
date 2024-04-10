import React from "react";
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom';

import {auth, db} from '../firebase/firebase'

import {
  Container,
  Box,
  Flex,
  Text,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";

import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";



const Chat = ({selectedCity, preFilledMessage}) => {

  const [messages, setMessages] = useState([]);
  // const [newMessage, setNewMessage] = useState(""); 
  const [newMessage, setNewMessage] = useState(preFilledMessage || "");
  const messagesRef = collection(db, "messages");
  
  //to access data from firestore
  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("selectedCity", "==", selectedCity),
      orderBy("createdAt")
    );

    console.log(selectedCity)
    console.log(messagesRef)

    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    return () => unsubscribe();
  }, [selectedCity]);



  //to store data in firestore
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(newMessage)

    if (newMessage === "") return;
    
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      selectedCity,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">

      <div className="header">
        <h1>Welcome to: { selectedCity }</h1>
      </div>

      <div className="messageBox">
        <div className="messages">
          { messages.map((message) => (
            <div key={message.id} className="message">
              <span className="user">{message.user}:</span> {message.text}
            </div>
          ))}
        </div>
      
        <form onSubmit={handleSubmit} className="new-message-form">
          {/* <input
            type="textarea"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input"
            placeholder="Type your message here..."
          /> */}

          <textarea
            autofocus
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input"
            placeholder="Type your message here..."
          />
          
          <button type="submit" className="send-button">
            Send
          </button>

        </form>

      </div>


    </div>
  );
};

export default Chat;