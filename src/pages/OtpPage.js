import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserAsync,
  selectLoggedInUser,
} from "../features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const formData = location.state;

  const handleOtp = async () => {
    try {
      dispatch(createUserAsync({ ...formData, otp }));
    } catch (err) {
      console.log(`Error while signing in: ${err}`);
    }
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter OTP
          </h2>
        </div>
        <div className="flex flex-col space-y-2 mx-auto h-10 w-auto mt-10">
          <label htmlFor="otp" className="font-semibold">
            Otp:
          </label>
          <input
            placeholder="Enter OTP..."
            type="number"
            name="otp"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="px-2 rounded-lg "
          />
        </div>
        <div className="mx-auto h-10 w-auto mt-5">
          <button
            onClick={handleOtp}
            className="py-2 px-10 w-full bg-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:opacity-80"
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
