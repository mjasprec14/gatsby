import React from 'react';
import { Layout } from '../components';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function About() {
  return (
    <Layout>
      <main className="max-w-5xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 p-4 md:space-x-6 space-y-6 lg:space-y-0">
          <article className="px-4">
            <h1>I'm a baby coloring book poke taxidermy</h1>

            <p>
              Laboris ea est est adipisicing ex do in consequat voluptate veniam
              ad eu est.
            </p>

            <p>
              Lorem cupidatat eu consectetur amet sunt Lorem. Commodo non id
              irure velit adipisicing ullamco. Aliqua reprehenderit labore ad
              pariatur ex. Culpa est occaecat nisi ipsum esse enim sit aliquip
              culpa sint. Aliqua qui dolor ad consectetur do duis nulla nisi
              reprehenderit. Exercitation anim quis sit officia minim. Veniam
              labore occaecat nisi in laborum.
            </p>

            <Link
              to="/contact"
              className="btn"
            >
              Contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="food in bowl"
            className="rounded-md max-h-[550px] object-center"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
}
