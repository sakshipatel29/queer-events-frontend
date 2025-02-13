// import React from 'react'
// import { BsCaretDownFill } from 'react-icons/bs';

// const Hero = () => {
//     return (
//         <div>
//             <div>
//                 <h1>Upcoming events for :</h1>
//                 <div>
//                     <h3>Chicago:</h3>
//                     <BsCaretDownFill />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero;

import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";

const illinoisCities = [
  "Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield",
  "Peoria", "Elgin", "Waukegan", "Champaign", "Bloomington", "Decatur",
  "Evanston", "Schaumburg", "Bolingbrook"
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Hero = ({ selectedCity, setSelectedCity, selectedMonth, setSelectedMonth }) => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  return (
    <div>
      <div>
        <h1>Upcoming events for:</h1>
        <div>
          <h3 onClick={() => setShowCityDropdown(!showCityDropdown)}>
            {selectedCity || "Select a city"} <BsCaretDownFill />
          </h3>
          {showCityDropdown && (
            <ul>
              {illinoisCities.map((city) => (
                <li key={city} onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div>
        <h4 onClick={() => setShowMonthDropdown(!showMonthDropdown)}>
          {selectedMonth || "Select a month"} <BsCaretDownFill />
        </h4>
        {showMonthDropdown && (
          <ul>
            {months.map((month) => (
              <li key={month} onClick={() => { setSelectedMonth(month); setShowMonthDropdown(false); }}>
                {month}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Hero;
