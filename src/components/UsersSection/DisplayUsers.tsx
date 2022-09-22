import {
  Box,
  Button,
  Center,
  CircularProgress,
  Grid,
  Text,
} from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../../api";
import { APIError, ResponseData } from "../../api/types";
import UserCard from "./UserCard";

function DisplayUsers() {
  const { data, error, fetchNextPage, isLoading, isFetching } =
    useInfiniteQuery<ResponseData, APIError>(
      ["users"],
      ({ pageParam = 1 }) => getUsers(pageParam),
      {
        getNextPageParam(lastPage: ResponseData) {
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1;
          }
          return undefined;
        },
      },
    );
  const errorMessage = error?.response?.data.message || error?.message;

  const showMore = () => {
    fetchNextPage();
  };

  const isLastPage = data?.pageParams?.length
    ? data.pages[0].total_pages - data.pageParams.length
    : 1;

  return (
    <Box
      maxW="1170px"
      margin="0 auto"
      py="140px"
      px={{ base: "16px", md: "32px", lg: "60px", lgX: "0" }}
    >
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
        Working with GET request
      </Text>
      <Grid
        templateColumns="repeat(auto-fill, minmax(282px, 1fr))"
        gap={{ base: "20px", md: "16px", lg: "29px" }}
        mb="50px"
      >
        {error && (
          <Center>
            <Text>{errorMessage}</Text>
          </Center>
        )}
        {data?.pages.map((page) =>
          page.users.map((user) => <UserCard key={user.id} user={user} />),
        )}
      </Grid>
      <Center>
        {isFetching || isLoading ? (
          <CircularProgress
            size="48px"
            isIndeterminate
            color="#00BDD3"
            thickness="4px"
          />
        ) : (
          !!isLastPage && (
            <Button
              style={{ height: "34px" }}
              variant="showMore"
              onClick={showMore}
            >
              Show more
            </Button>
          )
        )}
      </Center>
    </Box>
  );
}

export default DisplayUsers;
