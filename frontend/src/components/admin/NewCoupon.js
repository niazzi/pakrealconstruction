import React, { Fragment, useState } from "react";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useAlert } from 'react-alert'

const NewCoupon = () => {
  const [couponData, setCouponData] = useState({
    name: "",
    expiry: "",
    discount: "",
  });

  const alert = useAlert();
  const createNewCoupon = (e) => {
    e.preventDefault();
    console.log("handel create new coupon");
    axios
      .post("http://localhost:4000/api/v1/admin/coupon/new", couponData)
      .then((response) => {
        if (response.data.success) {console.log("coupon::", response.data);
        alert.success('Coupon created successfully');
        if (error) {
          alert.error(error);
      }
      }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <MetaData title={"New Coupon"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div class="wrapper my-5">
              <form class="shadow-lg">
                <h1 class="mb-4">New Coupon Create</h1>

                <div class="form-group">
                  <label for="name_field">Name</label>
                  <input
                   type="text"
                   minlength="5"
                   maxLength="40"
                   required
                   pattern='[a-zA-Z][a-zA-Z ]+[a-zA-Z]$' 
                    id="name_field"
                    class="form-control"
                    value={couponData.name}
                    onChange={(e) => {
                      setCouponData({ ...couponData, name: e.target.value });
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="price_field">Discount %</label>
                  <input
                     type="number"
                     min="1"
                     max="1000000"
                     required
                    id="price_field"
                    class="form-control"
                    value={couponData.discount}
                    onChange={(e) => {
                      setCouponData({
                        ...couponData,
                        discount: e.target.value,
                      });
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="price_field">Expiry Date</label>
                  <input
                    type="date"
                    min="2000-04-01" max="2022-06-28" 
                    required
                    id="price_field"
                    class="form-control"
                    value={couponData.expiry}
                    onChange={(e) => {
                      setCouponData({ ...couponData, expiry: e.target.value });
                    }}
                  />
                </div>

                <button
                  id="login_button"
                  class="btn btn-block py-3"
                  onClick={(e) => createNewCoupon(e)}
                >
                  CREATE
                </button>
              </form>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default NewCoupon;
