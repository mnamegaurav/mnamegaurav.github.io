import React from "react";

export default function SectionLayout({ children, title, id, className, ...rest }) {
  return (
    <section className={className} id={id} {...rest}>
      <div className="resume-section-content">
        <h2 className="mb-5">{title}</h2>
        {children}
      </div>
    </section>
  );
}
