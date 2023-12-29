import DashboardView from "../../components/DashboardContainer";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { ContractsApi } from "../../../api/contracts-api";
import { Contract } from "./types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const ContractsPage = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<Contract[]>({
    queryKey: ["contracts"],
    queryFn: async () => {
      const response = await ContractsApi.getAll();
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
      <Box>
        {/* <Heading
          textAlign="center"
          mb={4}
          fontSize="me"
          font-family="Candara"
          textColor={"blue.100"}
        >
          Kontrakty
        </Heading> */}
        <Stack direction="row" spacing={1} align="center">
          <Button
            colorScheme="blue"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
          >
            Dodaj Kontrakt
          </Button>
        </Stack>

        <TableContainer>
          <Table variant="simple">
            <TableCaption textColor={"red"}>
              napisać kod: dla aktualnych kontraktów status "aktywny" i numer
              kontraktu widoczny w kolorze blue.300, dla nieaktualnych w kolorze
              red. Teraz z ręki to wpisałam, ale fajnie, gdyby było
              zautomatyzowane
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Numer Kontraktu</Th>
                <Th>Nazwa</Th>
                <Th>Partner Biznesowy</Th>
                <Th>Data Podpisania</Th>
                <Th>Data Ważności</Th>
                <Th>Status</Th>
                <Th>Akcja</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td textColor={"blue.300"}>917</Td>
                <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"blue.300"}>aktywny</Td>
                <Td>
                  <Stack direction="row" spacing={1} align="center">
                    <Button
                      colorScheme="gray"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <ViewIcon boxSize={4} color="##fcfced" />
                    </Button>
                    <Button
                      colorScheme="facebook"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <EditIcon boxSize={4} color="#fcfced" />
                    </Button>
                    <Button
                      colorScheme="red"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <DeleteIcon boxSize={4} color="#fcfced" />
                    </Button>
                  </Stack>
                </Td>
              </Tr>
              <Tr>
                <Td textColor={"blue.300"}>444</Td>
                <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"blue.300"}>aktywny</Td>
                <Td>
                  <Stack direction="row" spacing={1} align="center">
                    <Button
                      colorScheme="gray"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <ViewIcon boxSize={4} color="##fcfced" />
                    </Button>
                    <Button
                      colorScheme="facebook"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <EditIcon boxSize={4} color="#fcfced" />
                    </Button>
                    <Button
                      colorScheme="red"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <DeleteIcon boxSize={4} color="#fcfced" />
                    </Button>
                  </Stack>
                </Td>
              </Tr>
              <Tr>
                <Td textColor={"red"}>018</Td>
                <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"red"}>wygasły</Td>
                <Td>
                  <Stack direction="row" spacing={1} align="center">
                    <Button
                      colorScheme="gray"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <ViewIcon boxSize={4} color="##fcfced" />
                    </Button>
                    <Button
                      colorScheme="facebook"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <EditIcon boxSize={4} color="#fcfced" />
                    </Button>
                    <Button
                      colorScheme="red"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                    >
                      <DeleteIcon boxSize={4} color="#fcfced" />
                    </Button>
                  </Stack>
                </Td>
              </Tr>

              
              {data?.map(({ numer, nazwa, partner, dataPodpisania, dataWaznosci, status }) => (
                <Tr key={numer}>
                  <Td>{numer}</Td>
                  <Td>{nazwa}</Td> 
                  <Td>{partner}</Td>
                  <Td>{dataPodpisania}</Td>
                  <Td>{dataWaznosci}</Td>
                  <Td>{status}</Td>
                  <Td>
                    <Stack direction="row" spacing={1} align="center">
                      <Button
                        colorScheme="green"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />
                      </Button>
                      <Button
                        colorScheme="yellow"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button
                        colorScheme="red"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            
            </Tbody>
            <Tfoot>
              <Tr></Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </DashboardView>
  );
};

export default ContractsPage;
