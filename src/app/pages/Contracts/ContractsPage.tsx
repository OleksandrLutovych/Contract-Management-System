import DashboardView from "../../components/DashboardContainer";
import { Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
const ContractsPage = () => {
  return (
    <DashboardView>
      <Box>

        <Stack direction="row" spacing={1} align="center">
          <Button
            colorScheme="green"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"

          >
            Dodaj Kontrakt
          </Button>
          <Button
            colorScheme="yellow"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"

          >
            Edytuj Kontrakt
          </Button>
          <Button
            colorScheme="red"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"

          >
            Usuń Kontrakt
          </Button>
        </Stack>

        {/* <TableContainer>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer> */}


      </Box>
    </DashboardView>
  );
};

export default ContractsPage;
