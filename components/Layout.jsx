import React from "react";
import { PageTitle } from "../components/PageTitle";
import Link from "next/link";
import { SocialIcon } from "./SocialIcon";

export const Layout = ({ children }) => {
  const navbar = [
    {
      title: "pratik-srivastava",
      userName: true,
      lastItem: false,
    },
    {
      title: "hello",
      userName: false,
      lastItem: false,
    },
    {
      title: "about",
      userName: false,
      lastItem: false,
    },
    {
      title: "projects",
      userName: false,
      lastItem: false,
    },
    {
      title: "contact",
      userName: false,
      lastItem: true,
    },
  ];
  const social = [
    {
      link: "https://www.linkedin.com/in/srivastava2191/",
      icon: <i className="ri-linkedin-fill"></i>,
    },
    {
      icon: <i className="ri-instagram-fill"></i>,
    },
    {
      link: "https://twitter.com/Pratik_Srivasta",
      icon: <i className="ri-twitter-fill"></i>,
    },
    // {
    //   icon: <i className="ri-facebook-fill"></i>,
    // },
  ];
  return (
    <div className=" bg-primary w-full h-screen flex justify-center items-center">
      <div className="w-11/12 relative bg-primary-lighter rounded-lg overflow-hidden shadow-md shadow-primary-lighter border-lines border-2 h-90per">
        <div className="border-b-2 border-b-lines flex">
          {navbar.map((page) => (
            <PageTitle
              key={page.title}
              pageTitle={page.title}
              userName={page.userName}
              lastItem={page.lastItem}
            />
          ))}
        </div>
        <div className="max-h-85per h-85per overflow-auto">{children}</div>
        <div className="border-t-2 absolute border-t-lines flex w-full">
          <Link href="">
            <a className=" font-headline text-secondary text-xs inline-block border-r-2 hover:text-white border-r-lines px-2 py-3 hover:border-b-accent border-b-primary-lighter transition border-b-2">
              <h1 className=" mt-1">find me on:</h1>
            </a>
          </Link>
          {social.map((icon) => (
            <SocialIcon key={icon.icon} icon={icon.icon} link={icon.link} />
          ))}
          <a
            target="_blank"
            href={"https://github.com/pratiksrivastava01"}
            className="text-secondary hover:text-white text-headline  flex items-center last:ml-auto border-r-0 border-l-2 border-l-lines inline-block px-3  py-3 hover:border-b-accent border-b-primary-lighter transition border-b-2  "
          >
            <span className="text-xs block mr-1">@pratiksrivastava01</span>
            <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};


