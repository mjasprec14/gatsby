import React from 'react';
import { Layout } from 'components';
import { graphql, Link } from 'gatsby';
import setupTags from 'utils/setupTags';

export const query = graphql`
  {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default function Tags({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  const newTags = setupTags(recipes);
  return (
    <Layout>
      <main className="max-w-[1120px] mx-auto w-[90vw] min-h-screen">
        <section className="grid sm:grid-cols-3 gap-8 pb-12">
          {newTags.map((tag, index) => (
            <Link
              to={`/${tag[0]}`}
              key={index}
              className="bg-gray-400 rounded-lg text-white text-center p-3"
            >
              <h5 className="mb-0">{tag[0]}</h5>
              <p>{tag[1]} recipe</p>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
