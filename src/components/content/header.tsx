import React from "react";
import { css } from "@emotion/core";

export const Header: React.FCX = ({ className, children }) => (
  <h1
    className="text-center text-5xl font-thin m-0 "
    css={css`
      font-feature-settings: "palt";
    `}
  >
    {children}
  </h1>
);
