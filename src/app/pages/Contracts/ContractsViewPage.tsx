import DashboardView from "../../components/DashboardContainer";
import { Box, Badge, Flex, Avatar, Text,
    Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider,  HStack, VStack } from '@chakra-ui/react'

const ContractsViewPage = () => {
return (
    <DashboardView>
        {/* <Stack spacing={2} direction='row'>
            <Box maxW='750px' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='orange.400' p={4} color='white'>
                <Flex mt="40%">
                    <Avatar src='https://bit.ly/sage-adebayo' />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                         Segun Adebayo
                        <Badge ml='2' colorScheme='green'>
                        New
                        </Badge>
                        </Text>
                        <Text fontSize='sm'>UI Engineer</Text>
                    
                    </Box>
                </Flex> 
            </Box>
            <Card w="60%">
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='2'>
                        <Box >
                            <Heading size='xs' textTransform='uppercase'>
                            Dane adresowe
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            country, city, street, postcode 
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Dane kontaktowe
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            email, phonenumber
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Dane firmy
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            nip, regon
                           
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Stack> */}
    </DashboardView>
);
};

export default ContractsViewPage;