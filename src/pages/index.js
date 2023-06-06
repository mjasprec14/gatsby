import * as React from 'react';
import { Link } from 'gatsby';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu';

export default function Home() {
  return (
    <div>
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
      </NavigationMenu>

      <h1 className="text-red-500">Hello awesome people!!</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
