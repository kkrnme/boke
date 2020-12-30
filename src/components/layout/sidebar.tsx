import { Box, ChakraComponent, css, Heading, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export const Sidebar: ChakraComponent<"aside", { children: ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      as="aside"
      display={{ base: "none", md: "flex" }}
      spacing="1rem"
      position="sticky"
      h="min-content"
      top="1rem"
      flexBasis={{ base: "220px", lg: "255px" }}
      flexShrink={0}
    >
      {children}
    </Stack>
  );
};

export const SidebarCardTitle: ChakraComponent<"h4", { children: string }> = ({
  children: children,
}) => (
  <Heading
    as="h4"
    fontSize="1rem"
    borderBottom="1px"
    borderColor="gray.400"
    textAlign="center"
    pb=".5rem"
    px="1rem"
    mb=".5rem"
  >
    {children}
  </Heading>
);

export const SidebarCard: ChakraComponent<"div", {}> = props => (
  <Box p="1rem" {...cardChakra}>
    {props.children}
  </Box>
);

export const cardChakra = {
  bg: "purple.990",
  borderWidth: "1px",
  borderColor: "purple.900",
  rounded: "1rem",
  boxShadow: "md",
} as const;
