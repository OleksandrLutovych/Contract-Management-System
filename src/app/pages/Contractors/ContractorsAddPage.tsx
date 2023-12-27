import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { DashboardContainer } from "../../components";
import { useForm } from "react-hook-form";
import { ContractorAddForm } from "./types";

const defaultValues: ContractorAddForm = {
  name: "",
  nip: "",
  city: "",
  postcode: "",
  country: "",
  phonenumber: "",
  email: "",
  regon: "",
  street: "",
};

const ContractorsAddPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContractorAddForm>({ defaultValues });

  const onFormSubmit = (value: ContractorAddForm) => console.log(value);
  return (
    <DashboardContainer>
      <Box>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <FormControl isInvalid={errors.name}>
            <Input
              id="name"
              placeholder="Nazwa"
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
              mb={6}
            />
            <SimpleGrid columns={2} spacing={2} mb={6}>
              <Input
                id="nip"
                placeholder="NIP"
                {...register("nip", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <Input
                id="regon"
                placeholder="Regon"
                {...register("regon", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </SimpleGrid>

            <SimpleGrid columns={2} spacing={2} mb={6}>
              <Input
                id="country"
                placeholder="Kraj"
                {...register("country", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <Input
                id="city"
                placeholder="Miasto"
                {...register("city", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <Input
                id="street"
                placeholder="Ulica"
                {...register("street", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <Input
                id="postcode"
                placeholder="Kod pocztowy"
                {...register("postcode", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2} mb={6}>
              <Input
                id="phonenumber"
                placeholder="Numer telefonu"
                {...register("phonenumber", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <Input
                id="email"
                placeholder="Adres email"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </SimpleGrid>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </DashboardContainer>
  );
};

export default ContractorsAddPage;
