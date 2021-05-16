import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="whitesmoke" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="25px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="25px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaInstagram fontSize="25px" />}
    />
  </ButtonGroup>
);
