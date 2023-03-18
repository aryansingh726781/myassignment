// import axios from 'axios';

// import "./App.css";

// import React, { useEffect, useState } from 'react'


// export const Reviews = () => {

//   const [fake, setFake] = useState([]);
//   console.log(fake);

//   useEffect = (() => {
//     fakestore();
//   }, [])


//   const fakestore = async () => {
//     const myData = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
//     // console.log(response)
//     // const myData =  await response.json();
//     console.log(myData.data.data)
//     setFake(myData.data.data);

//   }
//   fakestore();
//   return (
//     <div className='row' >
//       <h1>Home page</h1>
//       {fake.map((values) => (
        
//           <div  >

//             <h3 >{values.Name}</h3>
//             <h6>{values.Company}</h6>
//             <h6>{values.Reviews}</h6>

         
            


//         </div>

        
//       ))}

//     </div>
//   )
// }



import React from 'react'

export const Reviews = () => {
  return (
    <div>Reviews</div>
  )
}
