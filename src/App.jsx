import { useEffect, useState, Suspense } from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Banner from "./assets/Components/Banner/Banner";
import CustomerTickets from "./assets/Components/CustomerTickets/CustomerTickets";
import TaskStatus from "./assets/Components/taskStatus/TaskStatus";
import AllTickets from "./assets/Components/CustomerTickets/AllTickets/AllTickets";
import Footer from "./assets/Components/Footer/Footer";
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [allTickets, setAllTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/card.json")
      .then((res) => res.json())
      .then((data) => {
        setAllTickets(data);
        setLoading(false);
      });
  }, []);

const handleAddToProgress = (ticket) => {
  toast("Added to In-Progress");
  setInProgress((prev) => [...prev, { ...ticket, status: "In-Progress" }]);
  setAllTickets((prev) => prev.filter((t) => t.id !== ticket.id));
};

const handleComplete = (ticket) => {
  toast("Task Completed");
  setResolved((prev) => [...prev, { ...ticket, status: "Resolved" }]);
  setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));
};


  const inProgressCount = inProgress.length;
  const resolvedCount = resolved.length;

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgressCount} resolved={resolvedCount} />
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        {loading ? (
          <div className="flex justify-center items-center w-full py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="col-span-2">
              <AllTickets tickets={allTickets} onCardClick={handleAddToProgress} />
            </div>
            <div>
              <TaskStatus
                inProgress={inProgress}
                resolved={resolved}
                onComplete={handleComplete}
              />
            </div>
          </div>
        )}
      </Suspense>
      <Footer></Footer>
     <ToastContainer/>
    </>
  );
}

export default App;
