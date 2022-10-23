import React from "react";
import { SIGNIN, SIGNUP } from "~/constants";
import { useTempContext } from "~/Context/TempContext";

function Form() {
  const { setRoute, route } = useTempContext();

  return (
    <div className="flex w-full items-center justify-center px-14">
      <div className="mb-12 w-full rounded-md bg-secondary-dark p-6 sm:w-96 2xl:w-120">
        <form className="flex flex-col gap-4">
          {route === SIGNUP && (
            <>
              <label className="text-sm" htmlFor="firstName">
                First Name
                <input className="input p-2" type="text" id="firstName" />
              </label>

              <label className="text-sm" htmlFor="lastName">
                Last Name
                <input className="input p-2" type="text" id="lastName" />
              </label>
            </>
          )}
          <label className="text-sm" htmlFor="mail">
            E-mail
            <input className="input p-2" type="email" id="mail" />
          </label>
          <label className="text-sm" htmlFor="password">
            Password
            <input className="input p-2" type="password" id="password" />
          </label>

          {route === SIGNUP && (
            <label className="text-sm" htmlFor="confirmPassword">
              Confirm Password
              <input
                className="input p-2"
                type="password"
                id="confirmPassword"
              />
            </label>
          )}

          <div className="flex w-full gap-4">
            <button className="flex-1 rounded-md bg-secondary-light p-2 transition-transform hover:scale-105 active:scale-90">
              Show Password
            </button>
            <button className="flex-1 rounded-md bg-primary p-2 transition-transform hover:scale-105 active:scale-90">
              {route === SIGNIN ? "Sign in" : "Sign up"}
            </button>
          </div>
          <div className="mt-2 rounded-full bg-secondary-light p-2 text-center">
            {route === SIGNIN && (
              <div className="cursor-pointer" onClick={() => setRoute(SIGNUP)}>
                New user?? <span className="text-primary">Sign up</span>
              </div>
            )}
            {route === SIGNUP && (
              <div className="cursor-pointer" onClick={() => setRoute(SIGNIN)}>
                Already a user??
                <span className="text-primary"> Sign In</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export { Form };
