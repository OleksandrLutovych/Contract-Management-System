import { Box, Divider, Heading, useToast } from "@chakra-ui/react";
import { DashboardContainer } from "../../components";
import { ContractorAddForm } from "./types";
import { useMutation } from "@tanstack/react-query";
import { ContractorsApi } from "../../../api/contractors-api";
import { useNavigate } from "react-router-dom";
import ContractorsForm from "./forms";

const ContractorsAddPage = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (value: ContractorAddForm) =>
      ContractorsApi.create(value),
  });

  const onFormSubmit = (value: ContractorAddForm) => {
    console.log(value);
    mutate(value);

    setTimeout(() => {
      navigate("/contractors");
    }, 3000);
  };
  return (
    <DashboardContainer>
      <Box>
        <Heading size="md" textAlign="center">
          Nowy kontrahent
        </Heading>
        <Divider />
        <ContractorsForm isPending={isPending} onFormSubmit={onFormSubmit} />
        {isSuccess &&
          toast({
            title: "Kontrahent utworzony",
            description: "Zostaniesz przeniesiony do listy kontrahentów",
            status: "success",
            duration: 2000,
            isClosable: true,
          })}
      </Box>
    </DashboardContainer>
  );
};

export default ContractorsAddPage;
