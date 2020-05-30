import React from "react";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "../components/layout";
import { graphql, PageProps } from "gatsby";
import { IndexQuery } from "../../types/graphqlTypes";
import { genPostDateAndPath, Post } from "../libs/post";
import PostList from "../components/organisms/PostList";
import _ from "lodash";

export const IndexPage: React.FC<PageProps<IndexQuery>> = ({
  data: {
    allPost: { edges },
  },
}) => (
  <Layout title="MOMIREPO">
    <PostList posts={edges.map(e => e.node)} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query Index {
    allPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          title
          tags
          date
          path
        }
      }
    }
  }
`;
