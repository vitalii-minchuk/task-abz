import { Box, Button, Flex, Text } from "@chakra-ui/react";
import bgImg from "../../assets/bg.jpg";

function Hero() {
  return (
    <section>
      <Flex
        h={{ base: "500px", lg: "650px" }}
        maxW="1170px"
        margin="0 auto"
        backgroundImage={`url("${bgImg}")`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        direction="column"
        alignItems="center"
        pt={{ base: "40px", md: "89px", lg: "164px" }}
      >
        <Box w={{ base: "328px", md: "380px" }}>
          <Text
            pb="21px"
            textAlign="center"
            color="white"
            lineHeight="40px"
            fontSize="40px"
            as="h1"
          >
            Test assignment for front-end developer
          </Text>
          <Text
            textAlign="center"
            color="white"
            lineHeight="26px"
            fontSize="16px"
          >
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they&lsquo;ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </Text>
          <Flex pt="32px" justify="center">
            <Button style={{ height: "34px" }} variant="normal">
              Sign up
            </Button>
          </Flex>
        </Box>
      </Flex>
    </section>
  );
}

export default Hero;
