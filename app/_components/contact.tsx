"use client";

function Contact() {
  return (
    <footer id="contact">
      <div className="relative container-fluid ">
        <div className="row w-full justify-center">
          <div className="mx-auto col-sm-7 col-md-7 col-9">
            <div className="timeline alt"></div>
            <small className="text_timeline-title bullet-title alt">
              Contact<span className="ml-1">/&gt;</span>
            </small>

            <div className="main-footer">
              <h2 className="text_contact-title">Find me on:</h2>
              <div className="w-full my-4 social-wrp">
                <a
                  className="social-link flex items-start"
                  href="https://www.linkedin.com/in/ashkan-rahnavardi/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-9 h-9 md:w-9 md:h-9 shrink-0 text-[#5918df]" // no-shrink and size
                  >
                    <path
                      d="M5 3c0 1.062-0.71 1.976-2.001 1.976-1.215 0-1.999-0.862-1.999-1.924 0-1.090 0.76-2.052 2-2.052s1.976 0.91 2 2zM1 19v-13h4v13h-4z"
                      fill="currentColor"
                    />
                    <path
                      d="M7 10.444c0-1.545-0.051-2.836-0.102-3.951h3.594l0.178 1.723h0.076c0.506-0.811 1.746-2 3.822-2 2.532 0 4.432 1.695 4.432 5.342v7.442h-4v-6.861c0-1.594-0.607-2.81-2-2.81-1.062 0-1.594 0.86-1.873 1.569-0.102 0.254-0.127 0.608-0.127 0.963v7.139h-4v-8.556z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="ml-2">in/ashkan.rahnavardi</span>
                </a>
                <a
                  className="social-link flex items-start"
                  href="https://github.com/ashkan-rahnavardi"
                  target="_blank"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    className="w-9 h-9 md:w-9 md:h-9 shrink-0 text-[#5918df]" // no-shrink and size
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
                    ></path>
                  </svg>
                  <span className="ml-2 break-all">
                    github.com/ashkan-rahnavardi
                  </span>
                </a>
                <a
                  className="social-link flex items-start"
                  href="mailto: ashkan.rahnavardi@gmail.com"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="36px"
                    height="36px"
                    viewBox="0 0 64 64"
                    className="w-9 h-9 md:w-9 md:h-9 shrink-0 text-[#5918df]" // no-shrink and size
                  >
                    <title>Envelope</title>
                    <desc>A line styled icon from Orion Icon Library.</desc>
                    <path
                      data-name="layer2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                      d="M2 12l30 27.4L62 12"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                    <path
                      data-name="layer1"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                      d="M2 12h60v40H2z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>

                  <span className="ml-2 break-all">
                    ashkan.rahnavardi@gmail.com
                  </span>
                </a>
              </div>
              <div className="mx-auto copy col-7">
                <small>&#169; Made by Ash. Circa 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
