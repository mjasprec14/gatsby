import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';

export default function RecipesList({ recipes = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 pb-12">
      {recipes?.map(({ id, title, image, prepTime, cookTime }) => {
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link
            to={`/${slug}`}
            key={id}
          >
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="h-60 rounded-md "
            />
            <h5>{title}</h5>
            <p className="">
              Prep: {prepTime}min | Cook: {cookTime}min
            </p>
          </Link>
        );
      })}
    </div>
  );
}
