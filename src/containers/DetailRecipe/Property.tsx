import { Box, Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

interface Props extends FlexProps {
  label: string;
  value: string;
}

export const Property = (props: Props) => {
  const { label, value, ...flexProps } = props;
  return (
    <Flex
      as="dl"
      direction={{ base: "column", sm: "row" }}
      px="6"
      py="4"
      _even={{ bg: useColorModeValue("pink.100", "gray.600") }}
      {...flexProps}
    >
      <Box as="dt" fontWeight="semibold" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1">
        {value}
      </Box>
    </Flex>
  );
};
