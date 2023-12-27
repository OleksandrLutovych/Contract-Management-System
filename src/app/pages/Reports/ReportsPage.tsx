import DashboardView from "../../components/DashboardContainer";
import { Text } from "@chakra-ui/react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

const ReportsPage = () => {
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
            Dodaj Raport
          </Button>
          <Button
            colorScheme="yellow"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            
          >
            Edytuj Raport
          </Button>
          <Button
            colorScheme="red"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            
          >
            Usuń Raport
          </Button>
        </Stack>
    </DashboardView>
  );
};

export default ReportsPage;
