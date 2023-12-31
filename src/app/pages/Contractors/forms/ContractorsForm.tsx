import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ContractorAddForm } from "../types";
import { FC } from "react";
import { defaultValues } from "./config";

type Props = {
  onFormSubmit: (value: ContractorAddForm) => void;
  isPending: boolean;
};

const ContractorsForm: FC<Props> = ({ onFormSubmit, isPending }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContractorAddForm>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormControl>
        {/* {formFields.map(({ label, name, placeholder, type }, index) => {
          if (type === "standard") {
            return (
              <FormLabel key={index}>
                {label}
                <Input
                  id={name}
                  placeholder={placeholder}
                  {...register("name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                {errors.name && <Text color="red">{errors.name.message}</Text>}
              </FormLabel>
            );
          }
        })} */}
        
        <Heading size='sm' textTransform='uppercase' color="orange.400" font-family="system-ui"
          fontWeight="lighter">
                            Dane firmy
                            </Heading>
        <FormLabel font-family="system-ui">Nazwa
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
          />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </FormLabel>

        <SimpleGrid columns={2} spacing={2} mb={2}>
          <FormLabel font-family="system-ui">
            NIP
            <Input
              id="nip"
              placeholder="10-cyfrowy numer"
              {...register("nip", {
                required: "This is required",
                minLength: {
                  value: 10,
                  message: "Minimum length should be 4",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum length should be 10",
                },
              })}
            />
          </FormLabel>
          <FormLabel font-family="system-ui">
            Regon
            <Input
              id="regon"
              placeholder="9-cyfrowy numer"
              {...register("regon", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
        </SimpleGrid>
        <Divider/>
        <Heading size='sm' textTransform='uppercase' color="orange.400" font-family="system-ui"
          fontWeight="lighter">
                            Dane adresowe
                            </Heading>
        
        <SimpleGrid columns={2} spacing={2} mb={2}>
        <FormLabel font-family="system-ui">
            Ulica
            <Input
              id="street"
              placeholder="Garbary"
              {...register("street", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
          
          <FormLabel font-family="system-ui">
            Miasto
            <Input
              id="city"
              placeholder="Bydgoszcz"
              {...register("city", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
          <FormLabel font-family="system-ui">
            Kraj
            <Input
              id="country"
              placeholder="Polska"
              {...register("country", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
          <FormLabel font-family="system-ui">
            Kod pocztowy
            <Input
              id="postcode"
              placeholder="85-326"
              {...register("postcode", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
        </SimpleGrid>
<Divider/>
        <Heading size='sm' textTransform='uppercase' color="orange.400" font-family="system-ui"
          fontWeight="lighter">
                            Dane kontaktowe
                            </Heading>

        <SimpleGrid columns={2} spacing={2} mb={6}>
          <FormLabel font-family="system-ui">
            Numer telefonu
            <Input
              id="phonenumber"
              placeholder="+48 123 456 789"
              {...register("phonenumber", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
              })}
            />
          </FormLabel>
          <FormLabel font-family="system-ui">
            Adres email
            <Input
              id="email"
              placeholder="Adres email"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Nie prawidłowy adres email",
                },
              })}
            />
          </FormLabel>
        </SimpleGrid>
      </FormControl>
      {/* <Button mt={4} colorScheme="teal" isLoading={isPending} type="submit">
        Dodaj
      </Button> */}
      <Button
              mt={4}
              colorScheme="orange"
              isLoading={isPending}
              type="submit"
            >
              Dodaj
            </Button>
    </form>
  );
};

export default ContractorsForm;
