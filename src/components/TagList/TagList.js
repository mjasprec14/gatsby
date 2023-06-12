import React from 'react';
import setupTags from 'utils/setupTags';
import { Link } from 'gatsby';

export default function TagList({ recipes }) {
  const newTags = setupTags(recipes);

  return (
    <section className="order-1 flex flex-col sm:order-none ">
      <h4>Recipes</h4>

      <div className="grid grid-cols-3 sm:grid-cols-1">
        {newTags.map((tag) => {
          return (
            <Link
              key={tag[0]}
              to={`/${tag[0]}`}
              className="block capitalize text-gray-500 hover:text-blue-600"
            >
              {tag[0]} ({tag[1]})
            </Link>
          );
        })}
      </div>
    </section>
  );
}
