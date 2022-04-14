import React from 'react'

export default function Skills() {
  return (
    <section className="row mx-0 resume-section" id="skills" style={{ overflowX: "hidden" }}>
      <div className="col-12 col-lg-8 resume-section-content px-0 pr-md-2">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages, Libraries & Tools</div>
        <ul
          className="
              list-inline
              dev-icons
              text-center
              justify-content-center
              shadow-sm
              border
              rounded
            "
        >
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/nolan/64/python.png" />
            <p className="m-0 font-weight-bold skill__title">Python</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/dusk/64/000000/javascript-logo.png" />
            <p className="m-0 font-weight-bold skill__title">JavaScript</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/django.png" />
            <p className="m-0 font-weight-bold skill__title">Django</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://www.django-rest-framework.org/img/logo.png" />
            <p className="m-0 font-weight-bold skill__title">DRF</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/dusk/50/000000/react.png" />
            <p className="m-0 font-weight-bold skill__title">React</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="64" src="https://img.icons8.com/ios-filled/50/000000/circled-n.png" />
            <p className="m-0 font-weight-bold skill__title">NextJS</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/50/000000/redux.png" />
            <p className="m-0 font-weight-bold skill__title">Redux</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/postgreesql.png" />
            <p className="m-0 font-weight-bold skill__title">PostgreSQL</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="64" src="https://img.icons8.com/fluent/64/000000/mysql-logo.png" />
            <p className="m-0 font-weight-bold skill__title">MySQL</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="64" src="https://img.icons8.com/color/50/000000/docker.png" />
            <p className="m-0 font-weight-bold skill__title">Docker</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/redis.png" />
            <p className="m-0 font-weight-bold skill__title">Redis</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.stackshare.io/service/1075/celery.png" />
            <p className="m-0 font-weight-bold skill__title">Celery</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/firebase.png" />
            <p className="m-0 font-weight-bold skill__title">FCM</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/dusk/50/000000/api.png" />
            <p className="m-0 font-weight-bold skill__title">Rest API</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/nolan/48/linux--v2.png" />
            <p className="m-0 font-weight-bold skill__title">Linux</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/amazon-web-services.png" />
            <p className="m-0 font-weight-bold skill__title">AWS</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/bootstrap.png" />
            <p className="m-0 font-weight-bold skill__title">Bootstrap</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/50/000000/material-ui.png" />
            <p className="m-0 font-weight-bold skill__title">Material UI</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/dusk/50/000000/css3.png" />
            <p className="m-0 font-weight-bold skill__title">CSS</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/color/48/000000/sass.png" />
            <p className="m-0 font-weight-bold skill__title">SCSS</p>
          </li>
          <li className="list-inline-item">
            <img loading="lazy" height="48" src="https://img.icons8.com/dusk/50/000000/html-5.png" />
            <p className="m-0 font-weight-bold skill__title">HTML</p>
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="mb-0 list-group shadow-sm">
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            Mobile-First, Responsive Design.
          </li>
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            Cross Browser Testing & Debugging.
          </li>
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            Creating documentation of the project for further contribution.
          </li>
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            Continuous integration and Continuous delivery.
          </li>
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            Dockerizing the application.
          </li>
          <li className="list-group-item list-group-item-action">
            <i className="bi bi-check-circle text-primary"></i>
            API Development with Robust Authentication (MFA & OAuth).
          </li>
        </ul>
      </div>
      <div className="col-12 col-lg-4 img-responsive mt-5 w-100" style={{ overflowX: "auto" }}>
        <img
          loading="lazy"
          src="https://github-readme-stats.vercel.app/api?username=mnamegaurav&show_icons=true&theme=radical"
        />
        <img
          loading="lazy"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=mnamegaurav&show_icons=true&theme=radical"
        />
      </div>
    </section>
  );
}
