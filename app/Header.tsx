import Link from "next/link";
import NavList from "./NavList";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div className="bg-custom-primary py-3">
        <div className="container d-flex justify-content-end align-items-center">
          <a className="social-item" href="#">
            <Image
              src="/icons/linkedIn.svg"
              width={16}
              height={16}
              alt="linkedin"
            />
          </a>
          <a className="social-item" href="#">
            <Image
              src="/icons/facebook.svg"
              width={16}
              height={16}
              alt="facebook"
            />
          </a>
          <a className="social-item" href="#">
            <Image
              src="/icons/twitter.svg"
              width={16}
              height={16}
              alt="twitter"
            />
          </a>
          <a className="social-item" href="#">
            <Image src="/icons/gmail.svg" width={16} height={16} alt="gmail" />
          </a>
        </div>
      </div>
      <div className="py-4 position-xl-relative">
        <div className="container d-flex justify-content-between align-items-center position-relative position-xl-static flex-wrap flex-lg-nowrap">
          <Link href="/" className="me-lg-4 d-block w-75 w-sm-auto">
            <Image
              src="/logo.png"
              width={340}
              height={93}
              alt="logo"
              className="maxw-55 maxw-lg-100 img-fluid ms-auto ms-xl-0 d-block"
            />
          </Link>
          <ul className="text-center text-sm-start list-unstyled mt-4 mt-lg-0 d-sm-flex justify-content-sm-between justify-content-lg-end info-list w-100">
            <li className="info-list__item">
              <a
                href="mailto:evinfo@aarpowersolutions.com"
                className="info-list__link"
              >
                <Image
                  src="/icons/gmail-bg.svg"
                  width={56}
                  height={56}
                  alt="gmail-icon"
                  className="mx-auto mb-2 mb-xl-0 me-xl-3 w-100 w-xl-auto"
                />
                <span>
                  <p className="info-list__title text-center text-xl-start">
                    Email
                  </p>
                  <p>evinfo@aarpowersolutions.com</p>
                </span>
              </a>
            </li>
            <li className="info-list__item">
              <a href="tel:+919311291378" className="info-list__link">
                <Image
                  src="/icons/phone-bg.svg"
                  width={56}
                  height={56}
                  alt="gmail-icon"
                  className="mx-auto mb-2 mb-xl-0 me-xl-3 w-100 w-xl-auto"
                />
                <span>
                  <p className="info-list__title text-center text-xl-start">
                    Phone
                  </p>
                  <p>+91 93112 91378</p>
                </span>
              </a>
            </li>
          </ul>
          <NavList />
        </div>
      </div>
    </header>
  );
}
