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
  Textarea,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import InfoCard from "../Dashboard/components/InfoCard";
import { BiSolidMessageRounded } from "react-icons/bi";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  message: string;
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
          <Text fontWeight={"semibold"} fontSize={"2xl"}>
            Contact Us
          </Text>
          <Text color={"gray.60"}>
            Have a question or just want to know more? Feel free to reach out to
            us.
          </Text>
        </Stack>
        {/*  */}
        <Card.Root flexGrow={"1"} p={6}>
          <Text>
            You will receive response within 24 hours of time of submit.
          </Text>

          <form onSubmit={onSubmit}>
            <Stack>
              <HStack gap="10" width="full" my={"4"}>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="James" variant="outline" />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Surname</Field.Label>
                  <Input placeholder="Arthur" variant="outline" />
                </Field.Root>
              </HStack>

              <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.email}>
                  <Field.Label>Email</Field.Label>
                  <Input {...register("email")} placeholder="name@mail.com" />
                  <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.message}>
                  <Field.Label>Message</Field.Label>
                  <Textarea placeholder="Your Message" />
                  <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                </Field.Root>
              </Stack>

              <Checkbox.Root my={"4"}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label display={"flex"} gap={2}>
                  I agree with{" "}
                  <Text color={"p.purple"}>Terms & Conditions</Text>{" "}
                </Checkbox.Label>
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
          icon={BiSolidMessageRounded}
          tagbg="p.purple"
          notRequired="LIVE CHAT"
          text="Don’t have time to wait for the answer? Chat with us now."
        />

        <InfoCard
          cardbg="p.purple"
          tagbg="white"
          taglabel="Chatbox"
          labelcolor="p.purple"
          text="chat with us now"
          textcolor="white"
        />
      </Flex>
    </DashboardLayout>
  );
};

export default Support;
