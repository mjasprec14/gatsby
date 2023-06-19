import React from 'react';
import { Layout } from 'components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { BsClockHistory, BsClock, BsPeople } from 'react-icons/bs';

export default function RecipeTemplate({ data: { contentfulRecipe } }) {
  const {
    content: { ingredients, instructions, tags, tools },
    cookTime,
    description: { description },
    image,
    prepTime,
    servings,
    title,
  } = contentfulRecipe;

  const pathToImage = getImage(image);
  return (
    <Layout>
      <main className="max-w-[1120px] mx-auto w-[90vw] min-h-screen">
        <section>
          <h4>{title}</h4>
          <p>Cook Time: {cookTime}</p>
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      cookTime
      title
      servings
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
    }
  }
`;
