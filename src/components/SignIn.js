import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import "../Components/RegistrationForm.css";
function SignIn() {
  return (
    <>
      <div class="container">
        <div class="justify-content-center row">
          <div class="pt-5 mt-5 col-md-5 col-sm-12">
            <div class="mt-3 auth-root-container card">
              <div class="heading">Login to ExcelR</div>{" "}
              <div class="description">Start your journey today!</div>
              <div class="form-container">
                <div>
                  <form autocomplete="off" class="">
                    {" "}
                    <div></div>{" "}
                    <div class="form-row">
                      <div class="col">
                        <div class="mb-1 form-group">
                          <label class="label form-label" for="email">
                            email / mobile
                          </label>
                          <input
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="text"
                            id="email"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      {" "}
                      <label class="label form-label" for="password">
                        Password
                      </label>
                      <input
                        required=""
                        type="password"
                        id="password"
                        class="form-control"
                      />
                      <small class="form-text">
                        {" "}
                        <a href="/forgot-password">
                          <span class="sc-9a48f592-0 iKIqji">
                            Forgot your password?
                          </span>
                        </a>
                      </small>
                    </div>
                    <div class="w-100 p-2">
                      <button
                        class=" btn btn-primary sc-9a48f592-5 dLQFud w-100"
                        type="submit"
                        style={{ borderRadius: "50px" }}
                      >
                        Login
                      </button>
                    </div>{" "}
                  </form>
                </div>
              </div>
              <div class="mt-1 bottom-content">
                Don’t have an account?
                <span class="anchor">
                  <Link to="/register">Sign Up</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
