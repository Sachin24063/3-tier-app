import { ActionIcon, ThemeIcon } from "@mantine/core";
import { BsHandbagFill } from "react-icons/bs";
import React from "react";

const BagButton = () => {
  return (
    <ActionIcon size="lg">
      <ThemeIcon radius="md" size="xl">
        <BsHandbagFill />
      </ThemeIcon>
    </ActionIcon>
  );
};

export default BagButton;
