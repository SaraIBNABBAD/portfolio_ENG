import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.css";


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ht8ulmd",
        "template_s21qghi",
        e.target,
        "clNc8wt3EpBPuj0Dm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="footer" id="call">
      <h1 className="tit" data-aos="fade-zoom-in">
        Contact Me
      </h1>
      <div className="flxe" data-aos="fade-up">
        <section className="h-70 ">
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className=" card my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        {/* <h3 className="mb-5 text-uppercase">Contact Me</h3> */}
                        <form ref={form} onSubmit={sendEmail}>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="firstname"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="firstName"
                                >
                                  First name
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="lastName"
                                  className="form-control form-control-lg"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="lastName"
                                >
                                  Last name
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="email"
                                  id="email"
                                  className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="email">
                                  Email
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="subject"
                                  className="form-control form-control-lg"
                                />
                                <label className="form-label" htmlFor="subject">
                                  Subject
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="form-outline mb-4">
                            <textarea
                              type="text"
                              id="msg"
                              cols="30"
                              rows="5"
                              className="form-control form-control-lg"
                            ></textarea>
                            <label className="form-label" htmlFor="message">
                              Message
                            </label>
                          </div>
                          <div className="d-flex justify-content-end pt-3">
                            <button className="envoi" type="submit">
                              Envoyer
                            </button>
                          </div>
                          <div className="social">
                            <a
                              href="mailto:saraibnabbad96@gmail.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/sara-ibnabbad-272b9317b"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                              href="https://github.com/SaraIBNABBAD"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
