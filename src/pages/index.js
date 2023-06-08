import * as React from 'react';
import { Layout } from '../components';
import { StaticImage } from 'gatsby-plugin-image';

export default function Home() {
  return (
    <Layout>
      <main className="mx-auto min-h-[90vh] w-[90vw] max-w-[1120px] ">
        <header className="relative h-[40vh] mb-8">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="home page banner"
            className="h-full rounded-sm"
            placeholder="tracedSVG"
            layout="fullWidth"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 rounded-sm">
            <div className="text-white text-center">
              <h1>Simple recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
