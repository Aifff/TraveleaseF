import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  useParams
} from "react-router-dom";

import { Select, Tooltip } from "@chakra-ui/react";

import Notification from "./pages/errors/notification";

import Navbar from "./pages/general/navbar";
import Footer from "./pages/general/footer";

import Home from "./pages/general/home";
import City from "./pages/general/city";
import Chat from "./pages/general/chat";
// import Ai from './pages/general/ai';
import Food from "./pages/general/food";
import Accomodation from "./pages/general/accomodation";
import Travel from "./pages/general/travel";
import Siteseeing from "./pages/general/siteseeing";

import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  // const [room, setRoom] = useState("");

  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    // history.push(`/${event.target.value}`); // to be used when redirecting to individual page for each city
  };

  // const handleChange = (event) => {
  //   setSelectedCity(event.target.value);
  //   // history.push(`/${event.target.value}`); // to be used when redirecting to individual page for each city
  // };

  console.log(selectedCity);
  console.log(isAuth);

  return (
    <div className="App">
      {/* <Router> */}
      <Navbar
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity} ///changed selectedCity to setselected
      />

      <div className="phoneCity">
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
      </div>

      <div className="blank"></div>

      {/* <Select placeholder="Select option" value={selectedCity} onChange={handleChange}>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Banglore">Banglore</option>
      </Select> */}

      <Routes>
        <Route path="/" element={<Home City={selectedCity} setSelectedCity={setSelectedCity} />} exact />
        {/* <Route path="/:selectedCity" element={<City City={selectedCity} />} /> */}

        



        <Route // use render={....} with router or switch routing tags
          path="/chat"
          element={
            isAuth && selectedCity ? (
              <Chat selectedCity={selectedCity} />
            ) : (
              <Notification message="Please login and select a city from the navigation bar to explore." />
            )
          }
        />






        {/* for data to be fetched from SingleCard's button and pre-type it into input of chat */}
        <Route
          path="/chat/:preFilledMessage"
          element={
            isAuth? (
              <ChatPage selectedCity={selectedCity} />
            ) : (
              <Notification message="Please login and select a city from the navigation bar to enter a chat room." />
            )
          }
        />



        <Route
          path="/food"
          element={<Food selectedCity={selectedCity} />}
          exact
        />
        <Route
          path="/accomodation"
          element={<Accomodation selectedCity={selectedCity} />}
        />
        <Route
          path="/travels"
          element={<Travel selectedCity={selectedCity} />}
        />
        <Route
          path="/siteseeing"
          element={<Siteseeing selectedCity={selectedCity} />}
        />
      </Routes>
      {/* </Router> */}
      
      <Footer />

    </div>
  );
}

//for data to be fetched from SingleCard's button and pre-type it into input of chat
function ChatPage({ selectedCity }) {
  const { preFilledMessage } = useParams();
  console.log(preFilledMessage)

  return <Chat selectedCity={selectedCity} preFilledMessage={preFilledMessage} />;
}

export default App;