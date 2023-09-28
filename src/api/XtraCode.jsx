//FetchVenues.jsx: ————————————————————————————————————————————————

// // // import { GridLoader } from "react-spinners";
// // import { API_BASE_URL } from "../endPoints/endpoints";
// // import { useState, useEffect } from "react";

// // export const FetchVenues = () => {
// //   const [venues, setVenues] = useState([]);
// //   const [isLoading, setIsLoading] = useState();
// //   const [hasError, setHasError] = useState(null);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         setHasError(null);
// //         setIsLoading(true);

// //         const response = await fetch(`${API_BASE_URL}/venues`);
// //         const data = await response.json();
// //         setVenues(data);

// //         setIsLoading(false);
// //       } catch (error) {
// //         setIsLoading(false);
// //         setHasError(true);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   // if (isLoading || !venues) {
// //   //   return (
// //   //     <div>
// //   //       <GridLoader size={50} color="purple" />
// //   //     </div>
// //   //   );
// //   // }

// //   // if (hasError) {
// //   //   return <div>{hasError}</div>;
// //   // }

// //   return {venues, isLoading, hasError};
  
// // };

//FetchVenues.jsx ALL-IN-ONE-FILE: —————————
// import { useState, useEffect } from "react";
// import { API_BASE_URL } from "../endPoints/endpoints";
// import { GridLoader } from "react-spinners";
// import { Link } from "react-router-dom";

// export async function FetchAllVenues() {
//   const [venues, setVenues] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setHasError(false);
//         setIsLoading(true);

//         const response = await fetch(`${API_BASE_URL}/venues`);
//         console.log(response.status);
//         const data = await response.json();
//         console.log(data);
//         setVenues(data);
//       } catch (error) {
//         setHasError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getData();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (isLoading || !venues) {
//     return (
//       <div>
//         <GridLoader size={50} color="purple" />
//       </div>
//     );
//   }

//   if (hasError) {
//     return <div>{hasError}</div>;
//   }

//   return (
//     <div className="md:gap-5 lg:grid-cols-3 lg:gap-8">
//       {venues.map((place) => {
//         const {
//           id,
//           name,
//           description,

//           price,
//           maxGuests,
//           rating,
//           location,
//         } = place;

//         return (
//           <div key={id}>
//             <Link to={`/venues/${id}`}>
//               <div className="bg-gray-600">
//                 <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                   <p>{name}</p>
//                   <p>{location}</p>
//                 </h5>
//                 <div className="mb-5 mt-2.5 flex items-center">
//                   <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
//                     <p>{rating}</p>
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-3xl font-bold text-gray-900 dark:text-white">
//                     {price}
//                   </span>
//                   <div className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
//                     <p>{description}</p>
//                     <p>{maxGuests}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


//FetchAllVenues.jsx: ————————————————————————————————————————————————
// import { useState, useEffect } from "react";
// import { API_BASE_URL } from "../endPoints/endpoints";
// import { Card } from "flowbite-react";
// import { GridLoader } from "react-spinners";

// export async function FetchAllVenues() {
//   const [venues, setVenues] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     async function getData() {
//       try {
//         setHasError(null);
//         setIsLoading(true);

//         const response = await fetch(`${API_BASE_URL}/venues`);
//         console.log(response);
//         // eslint-disable-next-line no-unused-vars
//         const data = await response.json();

//         setVenues(data);
//         console.log("VEnues Data:", data);
//         setIsLoading(false);
//       } catch (error) {
//         console.log("Error fetching venue details:", error);
//         setHasError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getData();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   if (isLoading || !venues) {
//     return (
//       <div>
//         <GridLoader size={50} color="purple" />
//       </div>
//     );
//   }

//   if (hasError) {
//     return <div>{hasError}</div>;
//   }

//   return (
//     <div>
//       {venues.map((place) => {
//         return <Card key={place.id} place={place} />;
//       })}
//     </div>
//   );
// }


//FetchVenue.jsx: ————————————————————————————————————————————————
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { API_BASE_URL } from "../endPoints/endpoints";
// import {GridLoader} from "react-spinners"

// export const FetchVenue = () => {
//   const [venue, setVenue] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   let { id } = useParams();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setIsLoading(true);
//         setHasError(false);

//         const response = await fetch(`${API_BASE_URL}/venues/${id}`)
//         if (!response.ok) {
//           throw new Error("FAILES to fetch venue details");
//         }
//         const data = await response.json()

//         console.log("Venue Data:", data)

//         setVenue(data)
//       } catch (error) {
//         console.log("Error fetching venue details:", error)
//         setHasError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchData(`${API_BASE_URL}/venues/${id}`)
//     console.log(fetchData())
    
//   }, [id])

//   if (isLoading || !venue) {
//     return (
//       <div>
//         <GridLoader size={50} color="purple" />
//       </div>
//     );
//   }

//   if (hasError) {
//     return <div>{hasError}</div>;
//   }

//   return { venue, isLoading, hasError };
  
// };

