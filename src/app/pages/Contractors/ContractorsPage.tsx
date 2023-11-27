import DashboardView from "../../components/DashboardView";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { IoMdAdd as AddContractorsIcon } from "react-icons/io";
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
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import ContractorsAddModal from "./ContractorsAddModal";

const ContractorsPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <DashboardView>
      <Box width="100%">
        <ContractorsAddModal onClose={onClose} isOpen={isOpen} />

        <Button
          colorScheme="blue"
          mb={2}
          padding={2}
          size="md"
          borderRadius="xl"
          onClick={onOpen}
          rightIcon={<AddContractorsIcon />}
        >
          Dodaj
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
