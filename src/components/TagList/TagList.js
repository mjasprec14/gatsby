import React from 'react';
import setupTags from 'utils/setupTags';

export default function TagList({ recipes }) {
  const newTags = setupTags(recipes);
  console.log(newTags);
  console.log(newTags?.pancakes);
  return (
    <section>
      <h5>Recipes</h5>
      {Object.keys(newTags)
        .sort((a, b) => {
          const [firstTag] = a;
          const [secondTag] = b;
          return firstTag.localeCompare(secondTag);
        })
        .map((tagName) => (
          <p>
            {tagName.charAt(0).toUpperCase()}
            {tagName.slice(1)} ({newTags[tagName]})
          </p>
        ))}
    </section>
  );
}
