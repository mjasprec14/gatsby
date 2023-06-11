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
    <section className="grid gap-y-8 gap-x-4">
      <TagList tags={tags} />
      <RecipesList recipes={recipes} />
    </section>
  );
}
