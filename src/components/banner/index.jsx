import { Box, Button, Heading, Image, Text, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";

import BannerImage from "../../assets/banner.jpg";

const Banner = ({ onOpenReservationDialog }) => {
  return (
    <Box
      maxW="full"
      height="md"
      p="12"
      background="#455F5B"
      position="relative"
      mt="4"
    >
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        left="12"
        bottom="12"
      >
        <Heading color="#F0D6BB">Little Lemon</Heading>
        <Text fontSize="lg" fontWeight="bold" color="white">
          Chicago
        </Text>
        <Spacer mb="4" />
        <Text fontSize="md" color="white">
          We are a family owned Mediterranean restaurant, <br /> focused on
          traditional recipes served with a modern twist.
        </Text>
        <Spacer mb="4" />
        <Button
          maxW="xl"
          onClick={onOpenReservationDialog}
          background="#4F4546"
          border="1px"
          color="white"
          borderColor="transparent"
          borderRadius="10"
          _hover={{
            background: "transparent",
            borderColor: "#4F4546",
            color: "#4F4546",
          }}
        >
          Reverse Table
        </Button>
      </Box>
      <Image
        src={BannerImage}
        alt="logo"
        position="absolute"
        right="12"
        width="60"
        borderRadius="10"
      />
    </Box>
  );
};

Banner.propTypes = {
  onOpenReservationDialog: PropTypes.any,
};

export default Banner;
