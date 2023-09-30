import { Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <Flex justifyContent="space-around" h="16" p="4" boxShadow="md">
      <Image src={Logo} alt="logo" />

      <Flex
        justifyContent="space-around"
        alignItems="center"
        width="40"
        cursor="pointer"
      >
        <Text>Home</Text>
        <Text>Order</Text>
        <Text>Cart</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
