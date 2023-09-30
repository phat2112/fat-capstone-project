import { Flex, Box, Image, Text, Spacer } from "@chakra-ui/react";

import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
  return (
    <Flex
      width="full"
      justifyContent="space-between"
      alignItems="center"
      p="8"
      border="1px"
      borderRadius="10"
      borderColor="black"
      m="4"
    >
      <Box maxW="xl" mr="4">
        <Text fontSize="lg" fontWeight="bold">
          {food.name}
        </Text>
        <Spacer mt="2" />
        <Text fontSize="md">{food.description}</Text>
        <Spacer mb="2" />
        <Text fontSize="sm" color="tomato">
          {food.price}$
        </Text>
      </Box>
      <Image src={food.image} alt="food-image" maxWidth="xl" width="40" />
    </Flex>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;
