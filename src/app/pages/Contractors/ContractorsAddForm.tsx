import { useForm } from "react-hook-form";
import { ContractorAddForm } from "./types";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { description } from "./config";

const ContractorsAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContractorAddForm>();

  const handleFormSubmit = (data: ContractorAddForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {description.map(({ name, placeholder }) => (
        <FormControl isInvalid={errors.name ? true : false} key={name}>
          <FormLabel htmlFor="name">{placeholder}</FormLabel>
          <Input
            id={name}
            {...register(name, {
              required: "Pole obowiązkowe",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
      ))}

      <Button
        my={4}
        ml="auto"
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        width="84px"
      >
        Utworz
      </Button>
    </form>
  );
};

export default ContractorsAddForm;
