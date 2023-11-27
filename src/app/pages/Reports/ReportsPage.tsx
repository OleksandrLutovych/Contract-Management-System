import DashboardView from "../../components/DashboardView";
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
       <Text>
                RAPORTY MIESIĘCZNE (ILE NOWYCH KONTRAKTÓW PODPISANYCH, ILU KLIENTÓW DOSZŁO, ILU KLIENTÓW ODESZŁO)
            </Text>
    </DashboardView>
  );
};

export default ReportsPage;
