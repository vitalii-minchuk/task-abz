import { Center, Flex, Text } from "@chakra-ui/react";
import SuccessSVG from "./SuccessSVG";

interface IRequestResult {
  isOk: boolean;
}
function RequestResult({ isOk }: IRequestResult) {
  return (
    <Center py="150px">
      {isOk ? (
        <Flex direction="column" alignItems="center">
          <Text
            pb="50px"
            maxW={{ base: "328px", md: "704px" }}
            as="h1"
            m="0 auto"
            textAlign="center"
            color="rgba(0, 0, 0, 0.87)"
            lineHeight="40px"
            fontSize="40px"
          >
            User successfully registered
          </Text>
          <SuccessSVG />
        </Flex>
      ) : (
        <Text
          pb="50px"
          maxW={{ base: "328px", md: "704px" }}
          as="h1"
          m="0 auto"
          textAlign="center"
          color="rgba(0, 0, 0, 0.87)"
          lineHeight="40px"
          fontSize="40px"
        >
          Something went wrong
        </Text>
      )}
    </Center>
  );
}

export default RequestResult;
