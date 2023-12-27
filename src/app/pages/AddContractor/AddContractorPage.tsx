
import React from "react";

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
import {
    FormControl,
    FormLabel,
    Input,
    //FormErrorMessage,
    FormHelperText,
    HStack,
    RadioGroup,
    Radio,
  } from '@chakra-ui/react'

const AddContractorPage = () => {
  return (
    <DashboardView>
       
      
      <Box width="60%">
      <Heading textAlign="center" mb={4} fontSize="me" font-family="Candara" textColor={"blue.100"}>
          Dodaj Kontrahenta
          
        </Heading>
       
        
        
        <FormControl>
            <FormLabel font-family="Candara" textColor={"blue.500"}>Nazwa Kontrahenta</FormLabel>
            <Input type='nazwa_kontrahenta' />
        </FormControl>
        
        <FormControl>
        <FormLabel font-family="Candara" textColor={"blue.500"}>Numer Kontraktu</FormLabel>
            <Input type='numer_kontraktu' />
        </FormControl>
        
        <FormControl>
        <FormLabel font-family="Candara" textColor={"blue.500"}>Dane Kontaktowe</FormLabel>
            <Input type='dane_kontaktowe' />
        </FormControl>

        <FormControl as='fieldset'>
        <FormLabel font-family="Candara" textColor={"blue.500"}>
            Rodzaj
            </FormLabel>
            <RadioGroup defaultValue='Public'>
            <HStack spacing='24px'>
                <Radio value='private'>Private</Radio>
                <Radio value='public'>Public</Radio>
            </HStack>
            </RadioGroup>
        </FormControl>

        <FormControl as='fieldset'>
        <FormLabel font-family="Candara" textColor={"blue.500"}>
            Status
            </FormLabel>
            <RadioGroup defaultValue='Public'>
            <HStack spacing='24px'>
                <Radio value='test'>Test</Radio>
            
            </HStack>
            </RadioGroup>
        </FormControl>
        
        <Button
            colorScheme="blue"
            mb={2}
            padding={3}
            size="sm"
            borderRadius="xl"
          >Dodaj Kontrahenta
          </Button>
        
      </Box>
    </DashboardView>
  );
};

export default AddContractorPage;
