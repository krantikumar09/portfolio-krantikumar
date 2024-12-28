import logo from "./Logo.svg";
import logo_footer from "./Logo_footer_krantikumar.svg"
import html_logo from "./html_icon.svg";
import css_logo from "./vscode-icons_file-type-css.svg";
import js_logo from "./vscode-icons_file-type-js-official.svg";
import react_logo from "./logos_react.svg";
import node_logo from "./node-js-svgrepo-com.svg";
import express_logo from "./express-svgrepo-com.svg";
import mongo_logo from "./mongodb-svgrepo-com.svg";
import tailwind_log from "./vscode-icons_file-type-tailwind.svg";
import bootstrap_logo from "./logos_bootstrap.svg";
import git_logo from "./logos_git-icon.svg";
import vs_logo from "./vscode-icons_file-type-vscode.svg";
import github_log from "./akar-icons_github-fill.svg";
import github_white_logo from "./github_white_logo.svg";
import express_white_logo from "./express_white_logo.svg";

export const assets = {
  logo,
  logo_footer
};

export const techStack = [
  {
    light: html_logo,
    dark: html_logo
  },
  {
    light: css_logo,
    dark: css_logo
  },
  {
    light: js_logo,
    dark: js_logo
  },
  {
    light: react_logo,
    dark: react_logo,
  },
  {
    light: node_logo,
    dark: node_logo,
  },
  {
    light: express_logo,
    dark: express_white_logo
  },
  {
    light: mongo_logo,
    dark: mongo_logo,
  },
  {
    light: tailwind_log,
    dark: tailwind_log,
  },
  {
    light: bootstrap_logo,
    dark: bootstrap_logo,
  },
  {
    light: git_logo,
    dark: git_logo
  },
  {
    light: vs_logo,
    dark: vs_logo
  },
  {
    light: github_log,
    dark: github_white_logo
  }
];

export const projecList = [
  {
    _id: {
      $oid: "676435e4162a5b5ac93efaa4",
    },
    title: "Fashion E-commerce Web App",
    description:
      "This e-commerce website is built with ReactJS for the frontend, Node.js for the backend, and MongoDB for the database, with Tailwind CSS for responsive design. It offers a smooth shopping experience with product browsing, cart management, and secure checkout. The combination of these technologies ensures a fast, scalable, and mobile-friendly platform.",
    image:
      "https://res.cloudinary.com/dvilbyoq2/image/upload/v1734620643/hyray1hrq2hu5qae4icr.png",
    liveLink: "https://fashion9.netlify.app",
    githubRepo: "https://github.com/krantikumar09/fashion-ecommerce-app.git",
    featured: true,
    __v: 0,
  },
  {
    _id: {
      $oid: "6764364d162a5b5ac93efaa6",
    },
    title: "Organic Food Store Web App",
    description:
      "Experience our responsive e-commerce website featuring organic fruits and vegetables. With a user-friendly interface, secure checkout, and captivating visuals, enjoy a seamless shopping experience.",
    image:
      "https://res.cloudinary.com/dvilbyoq2/image/upload/v1734620748/oe96ji2sx91arjycwego.jpg",
    liveLink: "https://krantikumar09.github.io/organick/",
    githubRepo: "https://github.com/krantikumar09/organick.git",
    featured: true,
    __v: 0,
  },
  {
    _id: {
      $oid: "676436aa162a5b5ac93efaa9",
    },
    title: "Dynamic Event Manager App",
    description:
      "A simple and interactive event calendar application built with React. Users can add, view, and manage events on specific days of the calendar. Events can be categorized and color-coded (e.g., work, personal, others). The app also includes features such as exporting event data and drag-and-drop functionality for rescheduling events.",
    image:
      "https://res.cloudinary.com/dvilbyoq2/image/upload/v1734620841/gdw0sdp6sjrvqa4w5dpr.png",
    liveLink: "https://manage-event9.netlify.app/",
    githubRepo: "https://github.com/krantikumar09/dynamic-event-calender.git",
    featured: true,
    __v: 0,
  },
  {
    _id: {
      $oid: "676436f1162a5b5ac93efaab",
    },
    title: "Social Media Dashboard",
    description:
      "social media management with our user-friendly Social Media Dashboard Website. Schedule posts, analyze data, engage with followers, and collaborate seamlessly. Elevate your social media strategy today.",
    image:
      "https://res.cloudinary.com/dvilbyoq2/image/upload/v1734620913/gh3fxndbm36sywlixd2u.jpg",
    liveLink: "https://krantikumar09.github.io/social-media-dashboard/",
    githubRepo: "https://github.com/krantikumar09/social-media-dashboard.git",
    featured: true,
    __v: 0,
  },
];
