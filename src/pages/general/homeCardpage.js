import React, {useState} from "react";
import {Link} from 'react-router-dom'

import SingleCard from "../components/SingleCard";

// // background
// import React, { useEffect, useRef } from 'react';
// import BIRDS from 'vanta/dist/vanta.birds.min';

const CardPage = ({ book }) => {
  const foodData = book.filter((item) => item.Type === "Food");
  const hotelData = book.filter((item) => item.Type === "Hotel");
  const travelData = book.filter((item) => item.Type === "Travel");
  const siteseeingData = book.filter((item) => item.Type === "Siteseeing");




  // for Load More... and Load all... button food:
  const [visibleCountfood, setVisibleCountfood] = useState(3);
  const [showAllfood, setShowAllfood] = useState(false);

  const handleLoadMorefood = () => {
    setVisibleCountfood((prev) => prev + 3);
  };



  // for Load More... and Load all... button accomodation:
  const [visibleCountaccomodation, setVisibleCountaccomodation] = useState(3);
  const [showAllaccomodation, setShowAllaccomodation] = useState(false);

  const handleLoadMoreaccomodation = () => {
    setVisibleCountaccomodation((prev) => prev + 3);
  };




  // for Load More... and Load all... button travels:
  const [visibleCounttravels, setVisibleCounttravels] = useState(3);
  const [showAlltravels, setShowAlltravels] = useState(false);

  const handleLoadMoretravels = () => {
    setVisibleCounttravels((prev) => prev + 3);
  };




  // for Load More... and Load all... button siteseeing:
  const [visibleCountsiteseeing, setVisibleCountsiteseeing] = useState(3);
  const [showAllsiteseeing, setShowAllsiteseeing] = useState(false);

  const handleLoadMoresiteseeing = () => {
    setVisibleCountsiteseeing((prev) => prev + 3);
  };






  //to be used for 2nd alternate to Load all... cards on home page
  // const handleLoadAll = () => {
  //   setShowAll(true);
  // };


  //for animations if required
  // const vantaRef = useRef(null);
  // useEffect(() => {
  //   const vantaEffect = BIRDS({
  //     el: vantaRef.current,
  //     backgroundColor:  0X25717d
  //   });
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, []);
  // console.log(book)

  return (
    <>
      {/* {book.map((item) => (
                <SingleCard 
                    City={item.City}
                    Details={item.Details}
                    Type={item.Type}
                />
            ))}

      <div ref={vantaRef} className="hero" >
      </div> */}

      <div className="main">
        <h2>Genuine recommendations from the city natives</h2>
        <p className="cardHeading">Eateries:</p>
        <p className="cardDescription">Restaurants and Cafes with their specializations</p>

        {/*Alternate 1. for cards displayed all at initial load */}
        {/* <div className="cards">
          {foodData.length > 0 ? 
            (
            foodData.map((item) => (
              <SingleCard City={item.City} Type={item.Type} Name={item.Name} Locatioon={item.Locatioon} Speciality={item.Speciality} Details={item.Details} Picture={item.Picture} Rlink={item.Rlink}/>
            ))
            ) : 
            (
            <p>No eateries currently in store yet. Add some if you are from the city or refer someone.</p>
            )
          }
        </div> */}


        {/*Alternate 2. for cards with increment of 3 till end of array AND Load all... at before last few */}
        {/* <div className="cards">
          {foodData
            .slice(0, showAll ? foodData.length : visibleCount)
            .map((item, index) => (
              <SingleCard
                key={index}
                City={item.City}
                Type={item.Type}
                Name={item.Name}
                Locatioon={item.Locatioon}
                Speciality={item.Speciality}
                Details={item.Details}
                Picture={item.Picture}
                Rlink={item.Rlink}
              />
            ))}
        </div>
        {!showAll && visibleCount < foodData.length && (
          <button onClick={handleLoadMore}>Load More...</button>
        )}
        {!showAll && visibleCount >= foodData.length && (
          <Link to="/food">
          <button>Load all...</button>
        </Link>
        )} */}


        {/* 3. for cards with increment of 3 till end of array AND Load all... at before last few */}
        <div className="cards">
          {foodData.length > 0 ? (
            foodData.slice(0, showAllfood ? foodData.length : visibleCountfood).map((item) => (
              <SingleCard
                key={item.id}
                City={item.City}
                Type={item.Type}
                Name={item.Name}
                Locatioon={item.Locatioon}
                Speciality={item.Speciality}
                Details={item.Details}
                Picture={item.Picture}
                Rlink={item.Rlink}
              />
            ))
          ) : (
            <p className="cardError">No eateries currently in store yet. Add some if you are from the city or refer someone.</p>
          )}
        </div>
        
        {!showAllfood && foodData.length >0 && visibleCountfood < 6 && (
          <button className="loadmore" onClick={handleLoadMorefood}>Load More...</button>
        )}
        {!showAllfood && visibleCountfood >= 6 && (
          <Link to="/food">
            <button className="loadall">Load all...</button>
        </Link>
        )}
      {/* </div> */}


















      <div className="personalSuggestion"></div>


















      <p className="cardHeading">Accomodations:</p>
      <p className="cardDescription">Cozy travels and Motels</p>
      <div className="cards">
        {hotelData.length > 0 ? (
          hotelData.slice(0, showAllaccomodation ? hotelData.length : visibleCountaccomodation).map((item) => (
            <SingleCard
              key={item.id}
              City={item.City}
              Type={item.Type}
              Name={item.Name}
              Locatioon={item.Locatioon}
              Speciality={item.Speciality}
              Details={item.Details}
              Picture={item.Picture}
              Rlink={item.Rlink}
            />
          ))
        ) : (
          <p className="cardError">No accomodation currently in store yet. Add some if you are from the city or refer someone.</p>
        )}
      </div>
      {!showAllaccomodation && hotelData.length > 0 && visibleCountaccomodation < 6 && (
        <button className="loadmore" onClick={handleLoadMoreaccomodation}>Load More...</button>
      )}
      {!showAllaccomodation && visibleCountaccomodation >= 6 && (
        <Link to="/accomodation">
          <button className="loadall">Load all...</button>
        </Link>
      )}








      <p className="cardHeading">Conveyance:</p>
      <p className="cardDescription">Commute in and around the city.</p>
      <div className="cards">
        {travelData.length > 0 ? (
          travelData.slice(0, showAlltravels ? travelData.length : visibleCounttravels).map((item) => (
            <SingleCard
              key={item.id}
              City={item.City}
              Type={item.Type}
              Name={item.Name}
              Locatioon={item.Locatioon}
              Speciality={item.Speciality}
              Details={item.Details}
              Picture={item.Picture}
              Rlink={item.Rlink}
            />
          ))
        ) : (
          <p className="cardError">No travels services currently in store yet. Add some if you are from the city or refer someone.</p>
        )}
      </div>
      {!showAlltravels && travelData.length >0 && visibleCounttravels < 6 && (
        <button className="loadmore" onClick={handleLoadMoretravels}>Load More...</button>
      )}
      {!showAlltravels && visibleCounttravels >= 6 && (
        <Link to="/travels">
          <button className="loadall">Load all...</button>
        </Link>
      )}









      

      <p className="cardHeading">Places to visit:</p>
      <p className="cardDescription">Check out all tourist attractions!!!</p>
      <div className="cards">
        {siteseeingData.length > 0 ? (
          siteseeingData.slice(0, showAllsiteseeing ? siteseeingData.length : visibleCountsiteseeing).map((item) => (
            <SingleCard
              key={item.id}
              City={item.City}
              Type={item.Type}
              Name={item.Name}
              Locatioon={item.Locatioon}
              Speciality={item.Speciality}
              Details={item.Details}
              Picture={item.Picture}
              Rlink={item.Rlink}
            />
          ))
        ) : (
          <p className="cardError">No accomodation currently in store yet. Add some if you are from the city or refer someone.</p>
        )}
      </div>
      {!showAllsiteseeing && siteseeingData.length > 0 && visibleCountsiteseeing < 6 && (
        <button className="loadmore" onClick={handleLoadMoresiteseeing}>Load More...</button>
      )}
      {!showAllsiteseeing && visibleCountsiteseeing >= 6 && (
        <Link to="/siteseeing">
          <button className="loadall">Load all...</button>
        </Link>
      )}

    </div>






    </>
  );
};

export default CardPage;
