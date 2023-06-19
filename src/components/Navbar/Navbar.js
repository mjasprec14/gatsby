import React, { useState } from 'react';
import { Link } from 'gatsby';
import { NavigationMenu, NavigationMenuItem } from '../ui/navigation-menu';
import { Button } from '../ui/button';

import { RxTextAlignJustify } from 'react-icons/rx';
import logo from 'assets/images/logo.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <NavigationMenu className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavigationMenuItem className="list-none">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
              />
            </Link>
          </NavigationMenuItem>

          <Button
            variant={'outline'}
            className="nav-btn"
            onClick={() => setShow((prev) => !prev)}
          >
            <RxTextAlignJustify size={25} />
          </Button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <NavigationMenuItem className="list-none">
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/"
            >
              Home
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="list-none">
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/recipes"
            >
              Recipes
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="list-none">
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/tags"
            >
              Tags
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="list-none">
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/about"
            >
              About
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="nav-link contact-link">
            <Link
              className="btn"
              to="/contact"
            >
              Contact
            </Link>
          </NavigationMenuItem>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
