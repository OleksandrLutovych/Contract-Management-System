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
  import { ContractAddForm } from "../types";
  import { FC } from "react";
  import { defaultValues } from "./config";
  
  type Props = {
    onFormSubmit: (value: ContractAddForm) => void;
    isPending: boolean;
  };
  
  const ContractsForm: FC<Props> = ({ onFormSubmit, isPending }) => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<ContractAddForm>({ defaultValues });
  
    return (
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl>
        <SimpleGrid columns={2} spacing={2} mb={2}>
          
          {/* <Heading size='sm' textTransform='uppercase' color="orange.400" font-family="system-ui"
            fontWeight="lighter">
                              Dane firmy
                              </Heading> */}
          <FormLabel font-family="system-ui" >Numer
            <Input
              id="numer"
              placeholder="001"
              {...register("numer", {
                required: "This is required",
                minLength: {
                  value: 3,
                  message: "Minimum length should be 3",
                },
              })}
            />
            {errors.numer && <Text color="red">{errors.numer.message}</Text>}
          </FormLabel>
          <FormLabel font-family="system-ui" >
              Status
              <Input
                id="status"
                placeholder="aktywny / wygasły / zarchiwizowany"
                {...register("status", {
                  required: "This is required",
                  minLength: {
                    value: 7,
                    message: "Minimum length should be 7",
                  },
                  maxLength: {
                    value: 14,
                    message: "Maximum length should be 14",
                  },
                })}
              />
            </FormLabel>
  </SimpleGrid>

          <SimpleGrid columns={2} spacing={2} mb={2}>
            
            <FormLabel font-family="system-ui" >
              Nazwa
              <Input
                id="nazwa"
                placeholder="Nazwa kontraktu"
                {...register("nazwa", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </FormLabel>
            <FormLabel font-family="system-ui" >
              Partner Biznesowy
              <Input
                id="partner"
                placeholder="Nazwa partnera"
                {...register("partner", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </FormLabel>
          </SimpleGrid>
        
          {/* <Heading size='sm' textTransform='uppercase' color="orange.400" font-family="system-ui"
            fontWeight="lighter">
                              Dane adresowe
                              </Heading> */}
          
          <SimpleGrid columns={2} spacing={2} mb={2}>
          
            
            <FormLabel font-family="system-ui" >
              Data podpisania kontraktu
              <Input
                id="dataPodpisania"
                placeholder="01/01/2023"
                {...register("dataPodpisania", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </FormLabel>
            <FormLabel font-family="system-ui">
            Data ważności kontraktu
              <Input
                id="dataWaznosci"
                placeholder="01/01/2024"
                {...register("dataWaznosci", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
            </FormLabel>
           
          </SimpleGrid>

          
        </FormControl>
     
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
  
  export default ContractsForm;
  