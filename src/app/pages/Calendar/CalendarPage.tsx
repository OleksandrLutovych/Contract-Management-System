import Calendar from "../../../modules/Calendar/Calendar";
import { Box, Button, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import CalendarModalPage from "./CalendarModalPage";
import DashboardContainer from "../../components/DashboardContainer";

const CalendarPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [events, setEvents] = useState([]);

  return (
    <DashboardContainer>
      <Box>
        <Stack direction="row" spacing={1} align="center">
          <Button
            colorScheme="blue"
            mb={2}
            padding={3}
            size="md"
            borderRadius="xl"
            onClick={onOpen}
          >
            Dodaj Wydarzenie
          </Button>
        </Stack>
        <Calendar events={events} />
        <CalendarModalPage isOpen={isOpen} onClose={onClose} />
      </Box>
    </DashboardContainer>
  );
};

export default CalendarPage;
