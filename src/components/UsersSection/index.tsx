import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DisplayRequestResult } from "../../api/types";
import CreateNewUser from "./CreateNewUser";
import DisplayUsers from "./DisplayUsers";
import RequestResult from "./RequestResult";

function UsersSection() {
  const [request, setRequest] = useState<DisplayRequestResult>({
    time: false,
    success: false,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (request.time) {
      timer = setTimeout(() => {
        setRequest({ ...request, time: false });
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [request]);

  return (
    <Box as="section">
      {request.time ? (
        <RequestResult isOk={request.success} />
      ) : (
        <>
          <DisplayUsers />
          <CreateNewUser handleRequest={setRequest} />
        </>
      )}
    </Box>
  );
}

export default UsersSection;
