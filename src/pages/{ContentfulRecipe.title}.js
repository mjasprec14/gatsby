import React from 'react';
import { Layout } from 'components';
import { graphql, Link } from 'gatsby';
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
          <article className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="rounded-md h-[400px]"
            />

            <div className="">
              <h2>{title}</h2>
              <p>{description}</p>

              <div className="grid grid-cols-3 gap-4 mx-8">
                <div className="grid justify-items-center text-center">
                  <BsClock />
                  <h5>prep time</h5>
                  <p>{prepTime} min.</p>
                </div>

                <div className="grid justify-items-center text-center">
                  <BsClockHistory />
                  <h5>cook time</h5>
                  <p>{cookTime} min.</p>
                </div>

                <div className="grid justify-items-center text-center">
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </div>
              </div>

              <p className="flex items-center flex-wrap text-xs font-semibold">
                Tags :
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/${tag}`}
                    className="bg-blue-500 rounded-md text-white py-1 px-2 mx-2 capitalize"
                  >
                    {tag}
                  </Link>
                ))}
              </p>
            </div>
          </article>

          <article className="grid py-12 gap-y-8 gap-x-20"></article>
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
