import React from "react";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import DashboardView from "../../components/DashboardView";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Box,
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
  Divider,
  Heading,
} from "@chakra-ui/react";

const ContractorsPage = () => {
  return (
    <DashboardView>
      
      
      <Box width="100%">
      <Button
            colorScheme="blue"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            
          >
            Dodaj Klienta
          </Button>
        <Heading textAlign="center" mb={4} fontSize="sm">
          Lista kontrahentów
        </Heading>
        <Divider />

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Nazwa kontrahenta</Th>
                <Th>Numer kontraktu</Th>
                <Th>Dane kontaktowe</Th>
                <Th>Rodzaj</Th>
                <Th>Status</Th>
                <Th>Akcja</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Jan Kowalski</Td>
                <Td>#742</Td>
                <Td>Bydgoszcz</Td>
                <Td>Private</Td>
                <Td>Test</Td>
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
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardView>
  );
};

export default ContractorsPage;
