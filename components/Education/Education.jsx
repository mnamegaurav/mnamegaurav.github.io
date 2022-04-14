import React from 'react'

export default function Education() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div
          className="
              d-flex
              flex-column flex-md-row
              justify-content-between
              mb-5
              shadow-sm
              p-3
              border
              rounded
            "
        >
          <div className="flex-grow-1">
            <h3 className="mb-0">Diploma in Information Technology</h3>
            <div className="subheading mb-3">Government Polytechnic - Kanpur</div>
            <div>Board Of Technical Education - Uttar Pradesh</div>
            <p>79.30%</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2016 - June 2019</span>
          </div>
        </div>
        <div
          className="
              d-flex
              flex-column flex-md-row
              justify-content-between
              mb-5
              shadow-sm
              p-3
              border
              rounded
            "
        >
          <div className="flex-grow-1">
            <h3 className="mb-0">B.Sc.(General)</h3>
            <div className="subheading mb-3">Maa Sharda Mahavidyalaya, Bindki Road - Fatehpur</div>
            <div>Chhatrapati Shahu Ji Maharaj University - Kanpur</div>
            <p>57.55%</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2014 - May 2017</span>
          </div>
        </div>
        <div
          className="
              d-flex
              flex-column flex-md-row
              justify-content-between
              mb-5
              shadow-sm
              p-3
              border
              rounded
            "
        >
          <div className="flex-grow-1">
            <h3 className="mb-0">Class 12th - Intermediate</h3>
            <div className="subheading mb-3">S.V.M. Inter College - Fatehpur</div>
            <div>Board of High School and Intermediate Education - Uttar Pradesh</div>
            <p>90.6%</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">July 2012 - May 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}
