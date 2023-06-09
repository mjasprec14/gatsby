import React from 'react';
import { Layout, RecipesList } from 'components';
import { graphql } from 'gatsby';

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>

            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>

            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>

            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>

          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn block"
              >
                Submit
              </button>
            </form>
          </article>
        </section>

        <section className="max-w-100 text-center">
          <article className="py-4 px-8">
            <h5>Look at this Awesomesauce!</h5>
            <RecipesList recipes={recipes} />
          </article>
        </section>
      </main>
    </Layout>
  );
}
