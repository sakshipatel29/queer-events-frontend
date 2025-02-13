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



import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

const cities = ["Chicago", "Springfield", "Naperville", "Rockford", "Peoria"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Hero = ({ setSelectedCity, setSelectedMonth }) => {
  return (
    <div>
      <h1>Upcoming events for:</h1>
      <div>
        <h3>City:</h3>
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">All Cities</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <BsCaretDownFill />
      </div>
      <div>
        <h3>Month:</h3>
        <select onChange={(e) => setSelectedMonth(e.target.value)}>
          <option value="">All Months</option>
          {months.map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
        <BsCaretDownFill />
      </div>
    </div>
  );
};

export default Hero;
