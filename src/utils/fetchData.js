import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
        simpleData
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`;

const GetSiteMetadata = () => {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(getData);

  console.log(typeof meta);
  console.log(meta);
  return <></>;
};

export default GetSiteMetadata;
