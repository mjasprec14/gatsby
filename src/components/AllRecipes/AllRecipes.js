import React from 'react';
import { TagList, RecipesList } from 'components';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

export default function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query);

  const tags = recipes?.map((recipe) => {
    return recipe.content.tags;
  });

  return (
    <section className="max-w-[1120px] mx-auto grid sm:grid-cols-[200px_1fr] gap-4">
      <TagList tags={tags} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
