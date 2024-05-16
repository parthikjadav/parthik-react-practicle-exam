import { Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlogin from './componet/page/Adminlogin';
import Reservationfrom from './componet/page/Reservationform';
import Reservationlist from './componet/page/Reservationlist';
import Navbar from './componet/header/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_ROOM_PENDING } from './componet/redux-saga/room/action';
import { base_url, get_url } from './url';

const getRole = () => {
  const role = localStorage.getItem("role");
  return role;
};


function App() {

  const role = getRole();
  let dispatch = useDispatch();

  useEffect(() => {
    let url = base_url + get_url;
    dispatch({ type: GET_ROOM_PENDING, payload: url })
  })


  if (!role || role === "") {
    return (
      <Routes>
        <Route path="/" element={<Adminlogin />} />
      </Routes>
    );
  }

  if (role === "admin") {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/reservation" element={<Reservationfrom />} />
          <Route path="/ReservationList" element={<Reservationlist />} />
        </Routes>
      </>
    );
  }



}

export default App;
