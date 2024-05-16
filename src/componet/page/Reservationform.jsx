import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { POST_ROOM_PENDING } from '../redux-saga/room/action';

const Reservationform = () => {
  let name = useRef();
  let mobile = useRef();
  let address = useRef();
  let arrival = useRef();
  let checkout = useRef();
  let roomlist = useRef();
  let roomtype = useRef();
  let lunchtime = useRef();

  let dispatch = useDispatch();

  const roomdata = () => {
    let data = {
      name: name.current.value,
      mobile: mobile.current.value,
      address: address.current.value,
      arrival: arrival.current.value,
      checkout: checkout.current.value,
      roomlist: roomlist.current.value,
      roomtype: roomtype.current.value,
      lunchtime: lunchtime.current.value

    }
    console.log(data);
    dispatch({ type: POST_ROOM_PENDING, payload: data })
    name.current.value = "";
    mobile.current.value = "";
    address.current.value = "";
    arrival.current.value = "";
    checkout.current.value = "";
    roomlist.current.value = "";
    roomtype.current.value = "";
    lunchtime.current.value = "";
  }
  return (
    <>
      <div className="container">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" ref={name} />
          </div>
          <div class="col-md-6">
            <label class="form-label">mobile No.</label>
            <input type="text" class="form-control" ref={mobile} />
          </div>
          <div class="col-12">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" ref={address} />
          </div>
          <div class="col-md-6">
            <label class="form-label">arrival date</label>
            <input type="date" class="form-control" ref={arrival} />
          </div>
          <div class="col-md-6">
            <label class="form-label">checkout data</label>
            <input type="date" class="form-control" ref={checkout} />
          </div>
          <div class="col-md-4">
            <label class="form-label">Room list</label>
            <select class="form-select" ref={roomlist}>
              <option selected>select Room list</option>
              <option value="normal">normal</option>
              <option value="prime">prime</option>
              <option value="platinum">platinum</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Room type</label>
            <select class="form-select" ref={roomtype}>
              <option selected>select Room type</option>
              <option value="single bedroom">single bedroom</option>
              <option value="double bedroom">double bedroom</option>
              <option value="twin bedroom">twin bedroom</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">lunch time choose</label>
            <select class="form-select" ref={lunchtime}>
              <option selected>select lunch time</option>
              <option value="breakfast">breakfast</option>
              <option value="breakfast and lunch">breakfast and lunch</option>
              <option value="breakfast and lunch and dinner">breakfast and lunch and dinner</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" onClick={roomdata}>save data</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservationform