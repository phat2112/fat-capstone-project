import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Spacer,
  Button,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const FormReservation = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      selectedDate: "",
      numberOfGuests: 0,
      comment: "",
    },
    shouldUnregister: true,
  });

  const toast = useToast();

  const onSubmit = async (data) => {
    await new Promise((res) => {
      setTimeout(() => {
        res(console.log({ data }));
      }, 1000);
    });
    toast({
      title: "Booking table successfully",
      description: "You have booked table. Thank you",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>Booking Table</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={Boolean(errors?.["email"])}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter an email .."
                {...register("email", {
                  required: "Form is required",
                })}
              />
              {errors?.["email"] && (
                <FormErrorMessage>{errors["email"]?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Spacer mb="4" />

            <FormControl isInvalid={Boolean(errors?.["phone"])}>
              <FormLabel>Phone</FormLabel>
              <Input
                type="text"
                placeholder="Enter phone number .."
                {...register("phone", {
                  required: "Form is required",
                  validate: (value) =>
                    /\d+/.test(value) ? true : "Phone number is invalid",
                })}
              />
              {errors?.["phone"] && (
                <FormErrorMessage>{errors["phone"]?.message}</FormErrorMessage>
              )}
            </FormControl>
            <Spacer mb="4" />

            <FormControl isInvalid={Boolean(errors?.["selectedDate"])}>
              <FormLabel>Selected Date</FormLabel>
              <Input
                type="datetime-local"
                placeholder="Enter selected date .."
                {...register("selectedDate", {
                  required: "Form is required",
                  validate: (value) =>
                    new Date(value) instanceof Date
                      ? true
                      : "Selected Date is invalid",
                })}
              />
              {errors?.["selectedDate"] && (
                <FormErrorMessage>
                  {errors["selectedDate"]?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Spacer mb="4" />

            <FormControl isInvalid={Boolean(errors?.["numberOfGuests"])}>
              <FormLabel>Number of guests</FormLabel>
              <Input
                type="number"
                placeholder="Enter number of guests .."
                {...register("numberOfGuests", {
                  required: "Form is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    /\d+/.test(value) ? true : "Phone number is invalid",
                })}
              />
              {errors?.["numberOfGuests"] && (
                <FormErrorMessage>
                  {errors["numberOfGuests"]?.message}
                </FormErrorMessage>
              )}
            </FormControl>
            <Spacer mb="4" />

            <FormControl isInvalid={Boolean(errors?.["comment"])}>
              <FormLabel>Comment</FormLabel>
              <Textarea
                placeholder="Any note for restaurant"
                {...register("comment", {
                  maxLength: { value: 500, message: "Comment is too long!" },
                })}
              />
              {errors?.["comment"] && (
                <FormErrorMessage>
                  {errors["comment"]?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} type="button">
              Close
            </Button>
            <Button variant="ghost" type={"submit"}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

FormReservation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FormReservation;
