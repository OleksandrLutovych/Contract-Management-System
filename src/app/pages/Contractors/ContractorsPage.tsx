import { Button, Stack } from "@chakra-ui/react";
import DashboardView from "../../components/DashboardView";
import {
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
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ModalPage from "./ModalPage";
import ModalPageDelete from "./ModalPageDelete";
import {useState} from 'react'

const ContractorsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [events, setEvents] = useState()

  const navigate = useNavigate();

  return (
    <DashboardView>
      
      
      <Box width="100%">
      <Button
            colorScheme="blue"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            onClick={onOpen}
            
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
                      onClick={() => {navigate('/contractors/view')}}
                    >
                      <ViewIcon boxSize={4} color="##fcfced" />
                    </Button>
                    <Button
                      colorScheme="yellow"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                      onClick={onOpen}
                    >
                      <EditIcon boxSize={4} color="#fcfced" />
                    </Button>
                    <Button
                      colorScheme="red"
                      padding={3}
                      size="md"
                      borderRadius="xl"
                      onClick={onOpen}
                    >
                      <DeleteIcon boxSize={4} color="#fcfced" />
                    </Button>

                  </Stack>
                  <ModalPage isOpen={isOpen} onClose={onClose} />
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
