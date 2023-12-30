// import {
//     Box,
//     Button,
//     FormControl,
//     FormErrorMessage,
//     FormLabel,
//     Grid,
//     GridItem,
//     Input,
//     SimpleGrid,
//     Heading,
//   } from "@chakra-ui/react";

//   import { useForm } from "react-hook-form";

import { Box, Divider, Heading, useToast } from "@chakra-ui/react";
import { DashboardContainer } from "../../components";
import { ContractAddForm } from "./types";
import { useMutation } from "@tanstack/react-query";
import { ContractsApi } from "../../../api/contracts-api";
import { useNavigate } from "react-router-dom";
import ContractsForm from "./forms";
  
  // const defaultValues: ContractAddForm = {
  //   numer: "",
  //   nazwa: "",
  //   partner: "",
  //   dataPodpisania: "",
  //   dataWaznosci: "",
  //   status: "",
  // };
  
  const ContractsAddPage = () => {
    // const {
    //   handleSubmit,
    //   register,
    //   formState: { errors, isSubmitting },
    // } = useForm<ContractAddForm>({ defaultValues });
  
    // const onFormSubmit = (value: ContractAddForm) => console.log(value);
    // return (
    //   <DashboardContainer>
    const toast = useToast();
    const navigate = useNavigate();

    const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (value: ContractAddForm) =>
      ContractsApi.create(value),
  });

  const onFormSubmit = (value: ContractAddForm) => {
    console.log(value);
    mutate(value);

    setTimeout(() => {
      navigate("/contracts");
    }, 3000);
  };
  return (
    <DashboardContainer>
        <Box>
        <Heading
          textAlign="center"
          mb={4}
          fontSize="me"
          font-family="system-ui"
          fontWeight="lighter"
          textColor={"orange.400"}
        >
          Nowy Kontrakt
        </Heading>
        <Divider></Divider>
        <ContractsForm isPending={isPending} onFormSubmit={onFormSubmit} />
        {isSuccess &&
          toast({
            title: "Kontrakt utworzony",
            description: "Zostaniesz przeniesiony do listy kontraktów",
            status: "success",
            duration: 2000,
            isClosable: true,
          })}
      
        </Box>
       {/* <Heading
          textAlign="center"
          mb={4}
          fontSize="me"
          font-family="Candara"
          textColor={"orange.400"}
        >
          Nowy Kontrakt
        </Heading>
        <Box>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            
            <FormControl isInvalid={errors.numer}>
              
              <SimpleGrid columns={2} spacing={2} mb={3}>
              <Input
                id="numer"
                placeholder="Numer Kontraktu"
                {...register("numer", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                
              />

                <Input
                  id="status"
                  placeholder="Status Kontraktu"
                  {...register("status", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />

                <Input
                  id="nazwa"
                  placeholder="Nazwa"
                  {...register("nazwa", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />

                <Input
                  id="partner"
                  placeholder="Partner biznesowy"
                  {...register("partner", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              
                <Input
                  id="dataPodpisania"
                  placeholder="Data podpisania kontraktu"
                  {...register("dataPodpisania", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <Input
                  id="dataWaznosci"
                  placeholder="Data ważności kontraktu"
                  {...register("dataWaznosci", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                
                Trzeba poprawić typy daty podpisania i ważności (bo teraz jest string)
              </SimpleGrid>
              <FormErrorMessage>
                {errors.numer && errors.numer.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              mt={4}
              colorScheme="orange"
              isLoading={isSubmitting}
              type="submit"
            >
              Dodaj
            </Button>
          </form>
          
        </Box> */}
      </DashboardContainer>
    );
  };
  
  export default ContractsAddPage;
  