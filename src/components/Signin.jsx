import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signInUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInUser(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#f2f2f7] h-screen">
      <div className="max-w-7xl px-5 py-16 text-center md:px-10 md:py-24 lg:py-32">
        <h2 className="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
          One Body
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" mb-4 max-w-sm w-80 pb-4"
          name="wf-form-password"
          method="get"
        >
          <div className="relative">
            <img
              alt=""
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
              className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
              maxLength="256"
              name="name"
              placeholder="Email Address"
              required=""
            />
          </div>
          <div className="relative mb-4">
            <img
              alt=""
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
              className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
              placeholder="Password (min 4 characters)"
              required=""
            />
          </div>
          {error ? (
            <div className="flex items-center pb-4 font-medium">
              <span className=" inline-block cursor-pointer text-sm">
                {error && <p className="text-red-500 font-bold">{error}</p>}
              </span>
            </div>
          ) : null}
          <div className="flex justify-center">
            <button className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
              <p className="mr-6 font-bold tracking-wider">Sign in</p>
              <svg
                className="h-4 w-4 flex-none"
                fill="currentColor"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </button>
          </div>
        </form>
        <p className="text-sm text-[#636262]">
          Dont have an account?{' '}
          <Link to="/" className="text-sm font-bold text-black">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
