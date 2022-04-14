const routes = {
  about: {
    path: "#about",
    title: "About",
    showOnNavbar: true,
  },
  experience: {
    path: "#experience",
    title: "Experience",
    showOnNavbar: true,
  },
  education: {
    path: "#education",
    title: "Education",
    showOnNavbar: true,
  },
  skills: {
    path: "#skills",
    title: "Skills",
    showOnNavbar: true,
  },
  services: {
    path: "#services",
    title: "Services",
    showOnNavbar: true,
  },
  projects: {
    path: "#projects",
    title: "Projects  ",
    showOnNavbar: true,
  },
  awards: {
    path: "#awards",
    title: "Awards & Certifications",
    showOnNavbar: true,
  },
  interests: {
    path: "#interests",
    title: "Interests",
    showOnNavbar: true,
  },
};

const routesArr = Object.keys(routes).map((key) => routes[key].title);

export { routes, routesArr };
