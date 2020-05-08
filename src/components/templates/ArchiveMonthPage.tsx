import React from "react";
import { css } from "@emotion/core";
import { PageProps, graphql } from "gatsby";
import { Layout } from "./Layout";
import { Post, genPostDateAndPath } from "../../libs/post";
import PostLink from "../molecules/PostLink";
import { ArchiveMonthPageQuery } from "../../../types/graphqlTypes";

export type ArchiveMonthPageContenxt = {
  month: string;
  posts: Post[];
  startDate: string;
  endDate: string;
};
export type ArchiveMonthPageProps = PageProps<
  ArchiveMonthPageQuery,
  ArchiveMonthPageContenxt
>;

export const ArchiveMonthPage: React.FC<ArchiveMonthPageProps> = ({
  pageContext: { month, endDate, startDate },
  data: {
    allMdx: { edges },
  },
}) => (
  <Layout title={month}>
    {console.log({ endDate, startDate })}
    <div>
      {edges.map(({ node: { fileAbsolutePath, frontmatter, excerpt } }) => (
        <PostLink
          {...{
            excerpt,
            title: frontmatter?.title ?? "UNTITLED",
            path: genPostDateAndPath(fileAbsolutePath).path,
          }}
        />
      ))}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query ArchiveMonthPage($startDate: Date, $endDate: Date) {
    allMdx(
      filter: { frontmatter: { date: { gt: $startDate, lt: $endDate } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  }
`;

export default ArchiveMonthPage;
