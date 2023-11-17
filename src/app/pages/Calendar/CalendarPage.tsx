import Calendar from "../../../modules/Calendar/Calendar";
import DashboardView from "../../components/DashboardView";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import ModalPage from "./ModalPage";
import {useState} from 'react'

const CalendarPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [events, setEvents] = useState()

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
            onClick={onOpen}
          >
            Dodaj Wydarzenie
          </Button>
          <Button
            colorScheme="red"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            onClick={onOpen}
          >
            Usuń Wydarzenie
          </Button>
        </Stack>
        <Calendar events={events}/>
        <ModalPage isOpen={isOpen} onClose={onClose} />
      </Box>
    </DashboardView>
  );
};

export default CalendarPage;
