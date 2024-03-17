import { Stack, Image, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import bg_image from "../../assets/logo512.png"

const EmptyCart = () => {
  return (
    <Stack>
      <Title
        sx={(theme) => ({
          fontFamily: theme.fontFamily,
        })}
        mb="lg"
      >
        Your cart is empty!
      </Title>
      <Image
        mb={60}
        fit="contain"
        sx={(theme) => ({
          margin: "auto",
          width: "350px !important",
          height: "350px !important",
          [theme.fn.smallerThan("sm")]: {
            width: "80%",
            height: "auto",
          },
        })}
        src={bg_image}
        alt="Empty Cart"
      />
      <Text my="lg">
        Looks like you haven't added any pizza items to your cart yet.
      </Text>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </Stack>
  );
};

export default EmptyCart;
