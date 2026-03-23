import DashboardLayout from "@/components/DashboardLayout";
import {
  Card,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Field,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import InfoCard from "../Dashboard/components/InfoCard";
// import { BiSolidMessageRounded } from "react-icons/bi";

interface FormValues {
  firstName: string;
  lastName: string;
}

const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DashboardLayout title="Support">
      <Flex
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack maxW={"30rem"}>
          <Icon as={FaEnvelope} color={"p.purple"} />
          <Text>Contact Us</Text>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            cumque esse omnis placeat dicta debitis ipsa in sequi itaque
            corrupti?
          </Text>
        </Stack>
        {/*  */}
        <Card.Root flexGrow={"1"} p={6}>
          <Text>
            You will receive response within 24 hours of time of submit.
          </Text>

          <form onSubmit={onSubmit}>
            <Stack>
              <HStack gap="10" width="full">
                <Field.Root required>
                  <Field.Label>
                    Email <Field.RequiredIndicator />
                  </Field.Label>
                  <Input placeholder="me@example.com" variant="subtle" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>
                    Email <Field.RequiredIndicator />
                  </Field.Label>
                  <Input placeholder="me@example.com" variant="outline" />
                </Field.Root>
              </HStack>

              <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.firstName}>
                  <Field.Label>First name</Field.Label>
                  <Input {...register("firstName")} />
                  <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                  <Field.Label>Last name</Field.Label>
                  <Input {...register("lastName")} />
                  <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
                </Field.Root>
              </Stack>

              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
              </Checkbox.Root>

              <Button
                color={"black"}
                fontWeight={"semibold"}
                type="submit"
                _hover={{
                  bg: "gray.40",
                  color: "gray.60",
                }}
                bg={"gray.20"}
              >
                Send a Message
              </Button>
              <Button
                color={"black"}
                fontWeight={"semibold"}
                type="submit"
                _hover={{
                  bg: "gray.40",
                  color: "gray.60",
                }}
                bg={"gray.20"}
              >
                Book a Meeting
              </Button>
            </Stack>
          </form>
        </Card.Root>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        gap={"5"}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        mt={"8"}
      >
        <InfoCard
          cardbg="transparent"
          tagbg="purple"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae."
        />

        <InfoCard
          cardbg="purple"
          tagbg="white"
          taglabel="chatbox"
          labelcolor="purple.500"
          text="chat with us now"
          textcolor="white"
        />
      </Flex>
    </DashboardLayout>
  );
};

export default Support;
