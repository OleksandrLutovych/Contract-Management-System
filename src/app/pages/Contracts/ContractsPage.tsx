import DashboardView from "../../components/DashboardView";
import { Text } from "@chakra-ui/react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";import ModalPage from "./ModalPage";
import {useState} from 'react'

const ContractsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [events, setEvents] = useState()
  return (
    <DashboardView>
      
      
        <Stack direction="row" spacing={1} align="center">
          <Button
            colorScheme="green"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            onClick={onOpen}
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
       
        
      
    </DashboardView>
  );
};

export default ContractsPage;
