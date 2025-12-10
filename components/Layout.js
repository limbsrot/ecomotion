import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Layout({ children }) {
  // simple local state just to show / hide the login menu
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  function toggleLogin() {
    setIsLoginOpen((prev) => !prev);
  }

  useEffect(() => {
  function handleClickOutside(e) {
    // if menu is open AND click is outside both menu + button
    if (
      isLoginOpen &&
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsLoginOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [isLoginOpen]);


  return (
    <div className="app-root">
      <a href="#main-content" className="skip-link">
        skip to main content
      </a>

      <div className="background-gradient" />

      {/* top fixed brand bar */}
      <header className="site-brand-bar" aria-label="ecomotion branding">
        <div className="site-brand-inner">
          <Image
            src="/assets/logo.png"
            alt="ecomotion logo"
            width={32}
            height={32}
            className="site-brand-logo"
          />
          <div className="site-brand-text">
            <span className="site-brand-title">EcoMotion</span>
            <span className="header-pill" aria-label="beta status">
              beta
            </span>
          </div>
        </div>

        {/* user icon button that opens the login dropdown */}
        <div className="site-user-area">
            <button
            ref={buttonRef}
            type="button"
            className="user-icon-button"
            onClick={toggleLogin}
            aria-haspopup="dialog"
            aria-expanded={isLoginOpen}
            aria-controls="login-menu"
            >
            <Image
                src="/assets/login.png"
                alt="login menu icon"
                width={32}
                height={32}
                className="login-icon"
            />
            </button>


          {isLoginOpen && (
            <div
              ref={menuRef}
              id="login-menu"
              className="login-dropdown"
              role="dialog"
              aria-label="sign in to ecomotion"
            >
              <p className="login-title">sign in</p>
              <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                <label className="form-label" htmlFor="login-username">
                  username
                </label>
                <input
                  id="login-username"
                  type="text"
                  className="form-input"
                  placeholder="enter username"
                />

                <label className="form-label" htmlFor="login-password">
                  password
                </label>
                <input
                  id="login-password"
                  type="password"
                  className="form-input"
                  placeholder="enter password"
                />

              
                <button type="submit" className="primary-button login-button">
                  log in
                </button>

                <button
                  type="button"
                  className="ghost-button register-button"
                >
                  sign up
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      <div className="app-shell">{children}</div>
    </div>
  );
}
