import React from "react";
import DashboardView from "../../components/DashboardView";
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
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardView>
  );
};

export default ContractorsPage;
