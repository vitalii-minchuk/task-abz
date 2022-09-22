import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, FieldConfig, FieldProps, Form, Formik } from "formik";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { createNewUser } from "../../api";
import {
  APIError,
  DisplayRequestResult,
  ResponseData,
  User,
} from "../../api/types";
import { getPositionId, normalizePhone, phoneMask } from "../../utils/helpers";
import SCHEMA from "./FormValidationSchema";

interface ICreateNewUser {
  handleRequest: Dispatch<SetStateAction<DisplayRequestResult>>;
}
function CreateNewUser({ handleRequest }: ICreateNewUser) {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<ResponseData, APIError, User>(
    (user) => createNewUser(user),
    {
      onSuccess() {
        queryClient.resetQueries(["users"]);
        handleRequest((prev) => ({ ...prev, success: true }));
      },
    },
  );

  const handleSubmit = async (newUser: User) => {
    handleRequest((prev) => ({ ...prev, time: true }));
    await mutateAsync({
      name: newUser.name,
      email: newUser.email,
      phone: normalizePhone(newUser.phone),
      position_id: getPositionId(newUser.position),
      photo: newUser.photo,
      position: newUser.position,
    });
  };

  const imgRef = useRef<HTMLInputElement>(null);

  const uploadImg = () => {
    imgRef.current?.click();
  };
  return (
    <Box>
      <Text
        maxW={{ base: "328px", md: "704px" }}
        as="h1"
        m="0 auto"
        textAlign="center"
        color="rgba(0, 0, 0, 0.87)"
        lineHeight="40px"
        fontSize="40px"
      >
        Working with POST request
      </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          photo: "",
          position: "",
          position_id: "",
        }}
        validationSchema={SCHEMA}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props) => (
          <Form autoComplete="off">
            <Flex
              pt="50px"
              pb="26px"
              direction="column"
              alignItems="center"
              gap="50px"
            >
              <Field name="name">
                {({ field, form }: FieldProps<any, FieldConfig>) => (
                  <FormControl
                    width={{ base: "328px", md: "380px" }}
                    variant="floating"
                    sx={{ position: "relative" }}
                    isInvalid={(form.errors.name && form.touched.name) || false}
                  >
                    <Input
                      {...field}
                      id="name"
                      name="name"
                      height="54px"
                      bg="transparent"
                      placeholder=" "
                      errorBorderColor="#CB3D40"
                    />
                    <FormLabel>Your name</FormLabel>
                    {form.errors.name && form.touched.name && (
                      <FormErrorMessage
                        pl={4}
                        mb="-22px"
                        fontSize="12px"
                        lineHeight="14px"
                        color="#CB3D40"
                      >
                        {form.errors.name}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl
                    width={{ base: "328px", md: "380px" }}
                    variant="floating"
                    sx={{ position: "relative" }}
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <Input
                      {...field}
                      id="email"
                      name="email"
                      height="54px"
                      bg="transparent"
                      placeholder=" "
                      errorBorderColor="#CB3D40"
                    />
                    <FormLabel>Email</FormLabel>
                    {form.errors.email && form.touched.email && (
                      <FormErrorMessage
                        pl={4}
                        mb="-22px"
                        fontSize="12px"
                        lineHeight="14px"
                        color="#CB3D40"
                      >
                        {form.errors.email}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }: any) => (
                  <FormControl
                    width={{ base: "328px", md: "380px" }}
                    variant="floating"
                    sx={{ position: "relative" }}
                    isInvalid={form.errors.phone && form.touched.phone}
                  >
                    <Input
                      {...field}
                      id="phone"
                      type="text"
                      name="phone"
                      onFocus={() =>
                        form.setFieldValue("phone", "+38 (0", true)
                      }
                      height="54px"
                      bg="transparent"
                      placeholder=" "
                      onKeyUp={(e) => {
                        if (e.which === 8) {
                          form.setFieldValue("phone", form.values.phone, true);
                        } else {
                          form.setFieldValue(
                            "phone",
                            phoneMask(form.values.phone),
                            true,
                          );
                        }
                      }}
                      errorBorderColor="#CB3D40"
                    />
                    <FormLabel>Phone</FormLabel>
                    {form.errors.phone && form.touched.phone ? (
                      <FormErrorMessage
                        pl={4}
                        mt={1}
                        fontSize="12px"
                        lineHeight="14px"
                        color="#CB3D40"
                      >
                        {form.errors.phone}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText
                        color="#7E7E7E"
                        pl={4}
                        mt={1}
                        fontSize="12px"
                        lineHeight="14px"
                      >
                        +38 (XXX) XXX - XX - XX
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Field name="position">
              {({ field, form }: any) => (
                <FormControl
                  {...field}
                  m="0 auto"
                  w={{ base: "324px", md: "380px" }}
                  as="fieldset"
                  isInvalid={form.errors.position && form.touched.position}
                >
                  <FormLabel
                    mb="12px"
                    ml={{ base: "-3px", md: "0" }}
                    color="rgba(0, 0, 0, 0.87)"
                    as="legend"
                  >
                    Select your position
                  </FormLabel>
                  <RadioGroup
                    name="position"
                    margin="0 auto"
                    w={{ base: "324px", md: "380px" }}
                  >
                    <Flex
                      direction="column"
                      gap="9px"
                      color="rgba(0, 0, 0, 0.87)"
                      pb="48px"
                      ml={{ base: "-3px", md: "0" }}
                    >
                      <Radio variant="myRadio" value="Lawyer">
                        Lawyer
                      </Radio>
                      <Radio variant="myRadio" value="Content manager">
                        Content manager
                      </Radio>
                      <Radio variant="myRadio" value="Security">
                        Security
                      </Radio>
                      <Radio variant="myRadio" value="Designer">
                        Designer
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </FormControl>
              )}
            </Field>

            <Field name="photo">
              {({ form }: any) => (
                <Flex
                  cursor="pointer"
                  border={
                    form.errors.photo
                      ? "2px solid #CB3D40"
                      : "1px solid #D0CFCF"
                  }
                  borderRadius="4px"
                  onClick={uploadImg}
                  margin="0 auto"
                  maxW={{ base: "328px", md: "380px" }}
                  h="54px"
                >
                  <input
                    ref={imgRef}
                    type="file"
                    name="photo"
                    hidden
                    id="photo"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      if (e.target.files?.length) {
                        form.setFieldValue("photo", e?.target?.files[0]);
                      }
                    }}
                  />
                  <Center
                    w="83px"
                    border={
                      form.errors.photo
                        ? "2px solid #CB3D40"
                        : "1px solid rgba(0, 0, 0, 0.87)"
                    }
                    margin={form.errors.photo ? "-2px" : "0"}
                    borderRadius="4px 0 0 4px"
                  >
                    <Text color="rgba(0, 0, 0, 0.87)">Upload</Text>
                  </Center>
                  <Stack
                    justify="center"
                    pl={4}
                    lineHeight="26px"
                    fontSize="16px"
                    overflow="hidden"
                  >
                    {imgRef.current?.value ? (
                      <Text>
                        {
                          imgRef.current.value.split("\\")[
                            imgRef.current.value.split("\\").length - 1
                          ]
                        }
                      </Text>
                    ) : (
                      <Text color="#7E7E7E">Upload your photo</Text>
                    )}
                  </Stack>
                </Flex>
              )}
            </Field>
            {props.errors.photo && (
              <Text
                width={{ base: "328px", md: "380px" }}
                pl={4}
                pt={2}
                color="#CB3D40"
                m="0 auto -22px"
                fontSize="12px"
                lineHeight="14px"
              >
                {props.errors.photo}
              </Text>
            )}
            <Center pb="100px" pt="50px">
              <Button
                style={{ height: "34px" }}
                disabled={!props.isValid}
                variant="normal"
                type="submit"
              >
                Sign up
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CreateNewUser;
