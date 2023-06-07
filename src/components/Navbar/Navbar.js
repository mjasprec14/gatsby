import React from 'react';
import { Link } from 'gatsby';
import { NavigationMenu, NavigationMenuLink } from '../ui/navigation-menu';
import { Button } from '../ui/button';

import { RxTextAlignJustify } from 'react-icons/rx';
import logo from '../../assets/images/recipes/logo.svg';

const Navbar = () => {
  return (
    <NavigationMenu className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavigationMenuLink>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
              />
            </Link>
          </NavigationMenuLink>

          <Button
            variant={'outline'}
            className="nav-btn"
          >
            <RxTextAlignJustify size={25} />
          </Button>
        </div>
        <div className="nav-links show-links">
          <NavigationMenuLink>
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/"
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/about"
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/contact"
            >
              Contact
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/tags"
            >
              Tags
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink>
            <Link
              className="nav-link"
              activeClassName="active-link"
              to="/recipes"
            >
              Recipes
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink className="nav-link contact-link">
            <Link
              className="btn"
              activeClassName="active-link"
              to="/recipes"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
