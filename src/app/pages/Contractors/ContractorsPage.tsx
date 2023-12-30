import DashboardView from "../../components/DashboardContainer";
import { Box, TableContainer, Thead, Table, Tr, Th, Tbody, Td, Divider, Heading, Button, Flex, Input, Spinner, Stack,} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ContractorsApi } from "../../../api/contractors-api";
import { Contractor } from "./types";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContractorsPage = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<Contractor[]>({
    queryKey: ["contractors"],
    queryFn: async () => {
      const response = await ContractorsApi.getAll();
      const { data } = response;
      return data;
    },
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  return (
    <DashboardView>
      <Box width="100%">
      <Stack direction="row" spacing={1} align="center">
        {/* <Heading
          textAlign="center" mb={4} fontSize="me" font-family="Candara" textColor={"blue.100"}>Lista Kontrahentów
        </Heading> */}
        <Button
          colorScheme="blue" mb={1} padding={3} size="md" borderRadius="xl"
          onClick={() => navigate("/contractors/add")}>Dodaj Kontrahenta
        </Button>
        
        <Button
          colorScheme="orange" mb={1} padding={3} size="md" borderRadius="xl"
          onClick={() => navigate("/contractors/view")}>Podgląd Kontrahenta
        </Button>
        </Stack>
        <Divider />
        <Flex alignItems="center" gap={1}>
          <Input type="text" placeholder="Wyszukaj..." value={value} onChange={onChange} width="30%"/>
          <Button onClick={() => onSearch(value)}>Pokaż</Button>
        </Flex>
        <Divider />
        <TableContainer>
          {isLoading && <Spinner size="lg" ml="50%" />}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Nazwa kontrahenta</Th>
                <Th>Adres</Th>
                <Th>Email</Th>
                <Th>NIP</Th>
                <Th>Akcja</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map(({ name, city, country, email, nip }) => (
                <Tr key={nip}>
                  <Td color="orange.400" fontFamily="system-ui">{name}</Td>
                  <Td fontFamily="system-ui">{country}, {city}</Td>
                  <Td fontFamily="system-ui">{email}</Td>
                  <Td fontFamily="system-ui">{nip}</Td>
                  <Td>
                    <Stack direction="row" spacing={1} align="center">
                      <Button colorScheme="gray" padding={3} size="md" borderRadius="xl"
                      //</Stack>onClick={() => navigate("/contractors/view")}
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />

                      </Button>
                      <Button colorScheme="facebook" padding={3} size="md" borderRadius="xl">
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button colorScheme="red" padding={3} size="md" borderRadius="xl">
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardView>
  );
};

export default ContractorsPage;
