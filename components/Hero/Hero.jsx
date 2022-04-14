import React from "react";

import { BsYoutube } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          GAURAV KUMAR
          <span className="text-primary">SHARMA</span>
        </h1>
        <div className="subheading">
          Full Stack Software Developer | Founder |
          <br />
          <a
            className="my-3 px-5 btn btn-lg btn-danger rounded shadow-none"
            href="mailto:gaurav91297@gmail.com?subject=Regarding Freelance Project Opportunity&body=Hi Gaurav,"
            target="_blank"
          >
            Email Me
          </a>
          <a
            className="my-3 px-5 ml-2 btn btn-lg btn-secondary rounded shadow-none"
            href="https://rzp.io/l/60min"
            target="_blank"
          >
            Book a Call
          </a>
        </div>
        <div className="mb-4">
          <a href="https://discord.gg/9YnpgB8Rv5" target="_blank">
            <u>
              <small>
                <strong>JOIN MY DISCORD SERVER</strong>
              </small>
            </u>
          </a>
        </div>
        <p className="lead mb-5">
          Namaste, I am a<strong>Full Stack Software Developer</strong>, <strong>Educator</strong> and{" "}
          <strong>Founder</strong> of
          <strong>Dev.Junction</strong>(a Platform, Community, YouTube channel), I love working with{" "}
          <strong>Python/Django</strong>,<strong>Django Rest Framework</strong> and
          <strong>React(Web and Mobile)</strong> as my primary tech stack, currently living in my hometown at Uttar
          Pradesh, India.
        </p>
        <div className="social-icons">
          <a className="shadow social-icon mr-1 mr-md-4" href="https://www.linkedin.com/in/mnamegaurav" target="_blank">
            <BsLinkedin />
          </a>
          <a className="shadow social-icon mr-1 mr-md-4" href="https://github.com/mnamegaurav" target="_blank">
            <BsGithub />
          </a>
          <a className="shadow social-icon mr-1 mr-md-4" href="https://www.youtube.com/c/devjunction" target="_blank">
            <BsYoutube />
          </a>
          <a
            className="shadow social-icon mr-1 mr-md-4"
            href="https://www.instagram.com/devjunction.in"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a className="shadow social-icon mr-1 mr-md-4" href="https://blog.devjunction.in" target="_blank">
            <FaBlog />
          </a>
        </div>
      </div>
    </section>
  );
}
