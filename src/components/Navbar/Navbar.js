import React from 'react';
import { Link } from 'gatsby';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to="/">Home</Link>
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to="/about">About</Link>
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to="/contact">Contact</Link>
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to="/tags">Tags</Link>
      </NavigationMenuLink>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <Link to="/recipes">Recipes</Link>
      </NavigationMenuLink>
    </NavigationMenu>
  );
};

export default Navbar;
