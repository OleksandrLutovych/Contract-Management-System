
import React from "react";
import SortTable from "./SortTable.jsx";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import DashboardView from "../../components/DashboardView";
// import {
//   PhoneIcon,
//   AddIcon,
//   WarningIcon,
//   DeleteIcon,
//   EditIcon,
//   ViewIcon,
// } from "@chakra-ui/icons";
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
      <Heading textAlign="center" mb={4} fontSize="me" font-family="Candara" textColor={"blue.100"}>
          Lista Kontrahentów 
          <tr>
            <Button
            colorScheme="blue"
            mb={1}
            padding={3}
            size="md"
            borderRadius="xl"
            // onClick={}
            
          >
            Dodaj Kontrahenta
          </Button>
          </tr>
        </Heading>
       
        
        <Divider />
        <SortTable/>
        
        
      </Box>
    </DashboardView>
  );
};

export default ContractorsPage;
