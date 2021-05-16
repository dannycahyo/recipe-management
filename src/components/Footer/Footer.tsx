import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./Copyright";
import { Logo } from "./Logo";
import { SocialMediaLinks } from "./SocialMediaLinks";

export const Footer = () => (
  <Box
    color="white"
    bgColor="pink.700"
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="full"
    py="6"
    px={{ base: "4", md: "8" }}
  >
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: "center", sm: "start" }} />
    </Stack>
  </Box>
);
