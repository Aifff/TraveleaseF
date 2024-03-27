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

  // for load more and load all button:
  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleLoadAll = () => {
    setShowAll(true);
  };

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
            ))} */}

      {/* <div ref={vantaRef} className="hero" >
      </div> */}

      <div className="main">
        <h2>Genuine reCommendations from the city natives</h2>
        <h2>Eateries:</h2>
        <h6>Restaurants and Cafes with their specializations</h6>

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


        {/*Alternate 2. for cards with increment of 3 till end of array AND load all at before last few */}
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
          <button onClick={handleLoadMore}>Load More</button>
        )}
        {!showAll && visibleCount >= foodData.length && (
          <Link to="/food">
          <button>Load all</button>
        </Link>
        )} */}


      {/* 3. for cards with increment of 3 till end of array AND load all at before last few */}
      <div className="cards">
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
        {!showAll && visibleCount < 7 && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
        {!showAll && visibleCount >= 7 && (
          <Link to="/food">
          <button>Load all</button>
        </Link>
        )}
      </div>



      <div className="personalSuggestion"></div>

      <h2>Accomodations:</h2>
      <h6>Cozy Hotels and Motels</h6>
      <div className="cards">
        {hotelData.length > 0 ? (
          hotelData.map((item) => (
            <SingleCard
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
          <p>
            No accomodations currently in store yet. Add some if you are from
            the city or refer someone.
          </p>
        )}
      </div>

      <h2>Conveyance:</h2>
      <h6>Commute in and around the city.</h6>
      <div className="cards">
        {travelData.length > 0 ? (
          travelData.map((item) => (
            <SingleCard
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
          <p>
            No travels services currently in store yet. Add some if you are from
            the city or refer someone.
          </p>
        )}
      </div>

      <h2>Places to visit:</h2>
      <h6>Check out all tourist attractions!!!</h6>
      <div className="cards">
        {siteseeingData.length > 0 ? (
          siteseeingData.map((item) => (
            <SingleCard
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
          <p>
            No travels services currently in store yet. Add some if you are from
            the city or refer someone.
          </p>
        )}
      </div>
    </>
  );
};

export default CardPage;
