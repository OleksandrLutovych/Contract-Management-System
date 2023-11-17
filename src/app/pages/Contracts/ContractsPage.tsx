import DashboardView from "../../components/DashboardView";
import { Text } from "@chakra-ui/react";
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
       
        
      
    </DashboardView>
  );
};

export default ContractsPage;
