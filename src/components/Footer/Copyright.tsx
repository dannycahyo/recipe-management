import { Text, TextProps } from "@chakra-ui/layout";
import * as React from "react";

export const Copyright = (props: TextProps) => (
  <Text fontSize="md" {...props}>
    &copy; {new Date().getFullYear()} Recipe Management
  </Text>
);
