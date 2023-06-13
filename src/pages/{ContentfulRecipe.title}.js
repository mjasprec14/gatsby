import React from 'react';
import { Layout } from 'components';

export default function RecipeTemplate({ pageContext }) {
  return (
    <Layout>
      <main className="max-w-[1120px] mx-auto w-[90vw] min-h-screen">
        <section>
          <h4>{pageContext?.title}</h4>
        </section>
      </main>
    </Layout>
  );
}
