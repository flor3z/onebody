import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import ThemeButton from './ThemeButton';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [darkMode] = useContext(ThemeContext);

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <>
      <section className={darkMode ? 'dark' : ''}>
        <div className="grid h-screen md:h-screen md:grid-cols-2">
          <ThemeButton />
          <div className="flex flex-col items-center justify-center bg-white dark:bg-neutral-700">
            <div className="max-w-lg px-5 py-5 md:px-10 md:py-24 lg:py-32">
              <div className="mb-4 ml-2 flex h-8 w-8  sm:h-14 sm:w-14 rounded-md items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                  alt=""
                  className="inline-block h-5 w-5 sm:h-auto sm:w-auto"
                />
              </div>
              <p className="mb-6 text-[#647084] md:mb-12 lg:mb-16 dark:text-slate-200">
                Stay connected with your account and check-in on your health
                details. Keep in mind we have only one body and regular exercise
                coupled with good nutrition leads to longevity.
              </p>
              <p className="font-bold dark:text-slate-200">One Body</p>
              <p className="text-sm dark:text-slate-200">
                Living a Life of Wellness
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#f2f2f7] dark:bg-neutral-800">
            <div className=" max-w-lg px-5 py-12 text-center md:px-10 md:py-24 lg:py-32">
              <h2 className="mb-8 mt-8 text-4xl font-bold md:mb-12 md:text-5xl dark:text-slate-200">
                One Body
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mx-auto w-80 mb-4 max-w-sm pb-4"
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
                    value={email || ''}
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
                    value={password || ''}
                    className="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                    placeholder="Password (min 6 characters)"
                    required=""
                  />
                </div>
                {error ? (
                  <div className="flex justify-center items-center pb-4 font-medium">
                    <span className=" inline-block cursor-pointer text-sm">
                      {error && (
                        <p className="text-red-500 font-bold">{error}</p>
                      )}
                    </span>
                  </div>
                ) : null}
                <div className="flex justify-center">
                  <button className="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold rounded-md text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                    <p className="mr-6 font-bold tracking-wider">
                      Create Account
                    </p>
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
              <p className="text-sm text-[#636262] dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/"
                  className="text-sm font-bold text-black dark:text-slate-200"
                >
                  Login now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
