import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ROOM_PENDING, UPDATA_ROOM_PENDING } from '../redux-saga/room/action';

const Reservationlist = () => {

  let reservationlist = useSelector((state) => state.roomReducer.room);
  let dispatch = useDispatch();
  let [updata, setupdata] = useState({});

  // delete data
  const handledelete = (id) => {
    console.log(id);
    dispatch({ type: DELETE_ROOM_PENDING, payload: id })
  }

  //updata data
  let handelupdate = (e) => {
    setupdata({ ...updata, [e.target.name]: e.target.value })
    console.log(updata, "updata data");
  }

  const sumbitUpadata = () => {
    dispatch({ type: UPDATA_ROOM_PENDING, payload: updata });
    console.log(updata, 'sumbit update');
  }
  return (
    <>
      <table cellpadding="10px" className="col-12 text-center table-bordered uppercase border-secondary">
        <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>mobile</th>
            <th>address</th>
            <th>arrival time</th>
            <th>checkout time</th>
            <th>roomlist</th>
            <th>roomtype</th>
            <th>lunchtime</th>
            <th>Delete</th>
            <th>Updata</th>
          </tr>
        </thead>
        <tbody>
          {
            reservationlist.map((value, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.mobile}</td>
                  <td>{value.address}</td>
                  <td>{value.arrival}</td>
                  <td>{value.checkout}</td>
                  <td>{value.roomlist}</td>
                  <td>{value.roomtype}</td>
                  <td>{value.lunchtime}</td>
                  <td><button class="btn btn-danger" onClick={() => handledelete(value.id)}>delete</button></td>
                  <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setupdata(value)}>UPDATA</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>name :- </label>
              <input type="text" name="name" value={updata.name} onChange={handelupdate} /><br />
              <label>mobile :- </label>
              <input type="text" name="mobile" value={updata.mobile} onChange={handelupdate} /><br />
              <label>address :- </label>
              <input type="text" name="address" value={updata.address} onChange={handelupdate} /><br />
              <label>arrival :- </label>
              <input type="date" name="arrival" value={updata.arrival} onChange={handelupdate} /><br />
              <label>checkout :- </label>
              <input type="date" name="checkout" value={updata.checkout} onChange={handelupdate} /><br />
              <label class="form-label">room list :-</label>
              <select class="form-select" name='roomlist' value={updata.roomlist} onChange={handelupdate} >
                <option selected>select Room list</option>
                <option value="normal">normal</option>
                <option value="prime">prime</option>
                <option value="platinum">platinum</option>
              </select>
              <label class="form-label">room type:-</label>
              <select class="form-select" name='roomtype' value={updata.roomtype} onChange={handelupdate} >
                <option selected>select Room type</option>
                <option value="single bedroom">single bedroom</option>
                <option value="double bedroom">double bedroom</option>
                <option value="twin bedroom">twin bedroom</option>
              </select>
              <label class="form-label">lunch time:-</label>
              <select class="form-select" name='lunchtime' value={updata.lunchtime} onChange={handelupdate} >
                <option selected>select lunch time</option>
                <option value="breakfast">breakfast</option>
                <option value="breakfast and lunch">breakfast and lunch</option>
                <option value="breakfast and lunch and dinner">breakfast and lunch and dinner</option>
              </select>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={sumbitUpadata}>Updata Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservationlist