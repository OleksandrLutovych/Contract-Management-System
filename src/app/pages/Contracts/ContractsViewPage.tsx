import DashboardView from "../../components/DashboardContainer";
import { Box, Badge, Flex, Avatar, Text,
    Card, CardHeader, CardBody, CardFooter, Heading, Stack, StackDivider,  HStack, VStack, Divider } from '@chakra-ui/react'

const ContractsViewPage = () => {
return (
    <DashboardView>
        <Stack spacing={2} direction='row'>
        
            <Card w="30%" h="100px" bg='orange.400' color='white'>
                <CardBody >
                    <Stack spacing='5' direction='row'>
                    <Avatar src='https://bit.ly/sage-adebayo' />
                        <Stack direction='column'>
                        <Heading size='xs' textTransform='uppercase'>
                        Partner Biznesowy
                                </Heading>
                                <Text fontSize='sm'>
                                Kennie Hartmann
                            
                            </Text>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
            <Card w="80%" h="100px">
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='10' direction='row'>
                        <Box >
                            <Heading size='xs' textTransform='uppercase'>
                            Nazwa Kontraktu
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Kontrakt 1
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Numer
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            001
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                           Status
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            aktywny
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Data podpisania
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            01/01/2023 
                           
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Data ważności
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            01/01/2024 
                           
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
        <Divider></Divider>
        <Stack spacing={2} direction='row'>
        
            <Card w="30%" h="100px" bg='orange.400' color='white'>
                <CardBody >
                    <Stack spacing='5' direction='row'>
                    <Avatar src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9" />
                        <Stack direction='column'>
                        <Heading size='xs' textTransform='uppercase'>
                        Partner Biznesowy
                                </Heading>
                                <Text fontSize='sm'>
                                Ethelin Stanluck
                            
                            </Text>
                        </Stack>
                    </Stack>
                </CardBody>
            </Card>
            <Card w="80%" h="100px">
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='10' direction='row'>
                        <Box >
                            <Heading size='xs' textTransform='uppercase'>
                            Nazwa Kontraktu
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            Kontrakt 2
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Numer
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            002
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                           Status
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            aktywny
                            
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Data podpisania
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            01/01/2023 
                           
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Data ważności
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                            01/01/2024 
                           
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Stack>
    </DashboardView>
);
};

export default ContractsViewPage;