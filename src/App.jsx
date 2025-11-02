// import './App.css'
// import Banner from './assets/Components/Banner/Banner'
// import CustomerTickets from './assets/Components/CustomerTickets/CustomerTickets'
// import Navbar from './assets/Components/Navbar/Navbar'
// const fetchData = async () => { 
//    const res = await fetch('/card.json')
//    return res.json()
// }
// const cardDetails = fetchData()
// function App() {

//   return (
//     <>
//      <Navbar></Navbar>
//      <Banner></Banner>
//      <CustomerTickets cardDetails={cardDetails}></CustomerTickets>
//     </>
//   )
// }

// export default App
import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Banner from "./assets/Components/Banner/Banner";
import Navbar from "./assets/Components/Navbar/Navbar";
import AllTickets from "./assets/Components/CustomerTickets/AllTickets/AllTickets";

function App() {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    fetch("/card.json")
      .then((res) => res.json())
      .then((data) => setCardDetails(data));
  }, []);

  return (
    <>
      <Navbar />
      <Banner />

      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <AllTickets cardDetails={cardDetails} />
      </Suspense>
    </>
  );
}

export default App;
