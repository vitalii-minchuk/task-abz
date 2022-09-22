import { Box, Button, Flex } from "@chakra-ui/react";
import LogoSVG from "./LogoSVG";

function Header() {
  return (
    <Box as="header" h="60px" bg="white">
      <Flex
        maxW="1170px"
        margin="0 auto"
        h="full"
        alignItems="center"
        justify="space-between"
        px={{ base: "16px", md: "32px", lg: "60px", lgX: "0" }}
      >
        <LogoSVG />
        <Flex gap="10px">
          <Button style={{ height: "34px" }} variant="normal">
            Users
          </Button>
          <Button style={{ height: "34px" }} variant="normal">
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
