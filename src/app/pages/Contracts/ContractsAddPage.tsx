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
    Heading,
  } from "@chakra-ui/react";
  import { DashboardContainer } from "../../components";
  import { useForm } from "react-hook-form";
  import { ContractAddForm } from "./types";
  
  const defaultValues: ContractAddForm = {
    numer: "",
    nazwa: "",
    partner: "",
    dataPodpisania: "",
    dataWaznosci: "",
    status: "",
  };
  
  const ContractsAddPage = () => {
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm<ContractAddForm>({ defaultValues });
  
    const onFormSubmit = (value: ContractAddForm) => console.log(value);
    return (
      <DashboardContainer>
        
       <Heading
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
          
        </Box>
      </DashboardContainer>
    );
  };
  
  export default ContractsAddPage;
  