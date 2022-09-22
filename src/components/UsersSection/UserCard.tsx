import { Avatar, Grid, GridItem, Text } from "@chakra-ui/react";
import { User } from "../../api/types";
import { getPhoneStr } from "../../utils/helpers";
import NoUserSVG from "./NoUserSVG";

interface IUserCard {
  user: User;
}

function UserCard({ user }: IUserCard) {
  return (
    <GridItem
      bg="white"
      h="254px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="10px"
      p="20px"
      color="rgba(0, 0, 0, 0.87)"
    >
      <Grid placeContent="center" w="70px" h="70px" mb="20px">
        {user.photo ? (
          <Avatar size="70px" name={user.name} src={user.photo} />
        ) : (
          <NoUserSVG />
        )}
      </Grid>
      <Text
        w="full"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
        pb="23px"
      >
        {user.name}
      </Text>
      <Text
        w="full"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
        lineHeight="28px"
      >
        {user.position}
      </Text>
      <Text
        w="full"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
        lineHeight="28px"
      >
        {user.email}
      </Text>
      <Text
        w="full"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
        textAlign="center"
        lineHeight="26px"
      >
        {getPhoneStr(user.phone)}
      </Text>
    </GridItem>
  );
}

export default UserCard;
