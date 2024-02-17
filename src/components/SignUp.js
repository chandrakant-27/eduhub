import React from "react";
import { Link } from "react-router-dom";
// import "../Components/RegistrationForm.css";
function SignUp() {
  return (
    <>
      <div class="container">
        <div class="justify-content-center row">
          <div class="col-md-5 col-sm-12">
            <div class="auth-root-container card" style={{ marginTop: "45px" }}>
              <div class="heading">Sign up to MyApp</div>
              <div class="description">Your learning journey begins here!</div>
              <div class="form-container">
                <div>
                  <form autocomplete="off" class="">
                    <div class="row">
                      <div class="col">
                        <div></div>
                      </div>
                    </div>
                    <div class="form-row d-flex gap-2 p-1">
                      <div class="col">
                        <div class="form-group">
                          <label class="label form-label" for="firstName">
                            First Name *
                          </label>
                          <input
                            pattern="[A-Za-z]*"
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="text"
                            id="firstName"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label class="label form-label" for="lastName">
                            Last Name *
                          </label>
                          <input
                            pattern="[A-Za-z]*"
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="text"
                            id="lastName"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row">
                        <div class="col">
                          <label class="label form-label" for="channel">
                            email / mobile Number *
                          </label>
                          <input
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="text"
                            id="channel"
                            class="form-control"
                          />
                        </div>
                        <div class="col-md-12">
                          <small
                            class="text-primary form-text"
                            style={{ fontSize: "10px" }}
                          >
                            <span class="sc-9a48f592-0 iKIqji no-hover">
                              * Either of them can be used when signing in.
                            </span>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div class="form-row d-flex gap-2 flex-nowrap">
                      <div class="col">
                        <div class="m-0 form-group">
                          <label class="label form-label" for="passwordOne">
                            Password{" "}
                          </label>
                          <input
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="password"
                            id="passwordOne"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="col">
                        <div class="m-0 form-group">
                          <label class="label form-label" for="passwordTwo">
                            Confirm Password *
                          </label>
                          <input
                            required=""
                            autocomplete="off"
                            autocorrect="off"
                            autocapitalize="off"
                            spellcheck="false"
                            type="password"
                            id="passwordTwo"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>{" "}
                    <div class="pb-2 col-md-12">
                      <small
                        class="text-primary form-text"
                        style={{ fontSize: "10px" }}
                      >
                        <span class="sc-9a48f592-0 iKIqji no-hover">
                          {" "}
                          Minimum length of 8 characters.
                        </span>
                      </small>
                    </div>
                    <div style={{ width: "100%" }}>
                      <button
                        class=" btn btn-primary sc-9a48f592-5 dLQFud w-100"
                        type="submit"
                        style={{ borderRadius: "50px" }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="mt-1 mb-2 bottom-content">
                Already have an account?{" "}
                <span class="anchor">
                  <Link to="/signin">
                    <span class="sc-9a48f592-0 iKIqji">Login</span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
