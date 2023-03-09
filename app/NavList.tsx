"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavList() {
  const [isOpen, toggleOpenMenu] = useState(false);
  const [isMounted, handleMounted] = useState(false);

  useEffect(() => {
    handleMounted(true);
  }, []);

  const toggleMenu = () => {
    toggleOpenMenu(!isOpen);
  };

  return (
    <nav className="bg-xl-danger order-first order-xl-0 position-xl-absolute top-100 start-0 width-xl-100 h-auto">
      <div className="container">
        {isMounted && (
          <button
            className={`${isOpen && "active"} d-xl-none menu-btn btn`}
            onClick={toggleMenu}
          >
            <div className="w-100 bg-dark position-absolute start-0 top-50"></div>
          </button>
        )}
        <ul
          className={`${
            isOpen && "opacity-100 translate-y-0"
          } opacity-0 transtition-transform -translate-y-300 translate-xl-0 opacity-xl-100 start-0 w-100 top-menu top-sm-menu top-lg-menu top-xl-0 w-xl-auto bg-danger ps-xl-3 position-absolute position-xl-static bg-xl-none list-unstyled nav-list d-block d-xl-flex mb-0`}
        >
          <li className="nav-list__item">
            <Link className="nav-list__link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-list__link" href="/">
              About Us
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-list__link" href="/">
              Partner With Us
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-list__link" href="/">
              Blog
            </Link>
          </li>
          <li className="nav-list__item flex-grow-1">
            <Link className="nav-list__link" href="/">
              Contact Us
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              className="nav-list__link px-5 px-xl-5 nav-list__link--ic"
              href="/"
            >
              Find A Charging Station
            </Link>
          </li>
          <li className="nav-list__item">
            <Link className="nav-list__link px-xl-5 bg-custom-second" href="/">
              Download App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
