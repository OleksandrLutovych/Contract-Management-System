import DashboardView from "../../components/DashboardContainer";
import Calendar from "../../../modules/Calendar/Calendar";
import CalendarModalPage from "../Calendar/CalendarModalPage";
import { ContractorsApi } from "../../../api/contractors-api";
import { ContractsApi } from "../../../api/contracts-api";
import { Contract } from "../Contracts/types";
import { Contractor } from "../Contractors/types";
import { CalendarIcon, CheckCircleIcon, CheckIcon, WarningTwoIcon, BellIcon, ViewIcon, DeleteIcon, EditIcon} from '@chakra-ui/icons'
import { TableContainer, Divider, Box, Stack, SimpleGrid, GridItem, useDisclosure, Button, Thead, Table, Tr, Th, Tbody, Td, Heading  } from '@chakra-ui/react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const DashboardPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const { data } = useQuery<Contractor[]>({
    queryKey: ["contractors"],
    queryFn: async () => {
      const response = await ContractorsApi.getAll();
      const { data } = response;
      return data;
    },
  });
  const { data2 } = useQuery<Contract[]>({
    queryKey: ["contracts"],
    queryFn: async () => {
      const response = await ContractsApi.getAll();
      const { data2 } = response;

      return data2;
    },
  });
  
  return (
    <DashboardView>
      <SimpleGrid columns={2} spacing={8}>
        <Box  >
        <Button
          colorScheme="blue"
          mb={1}
          padding={3}
          size="md"
          borderRadius="xl"
          onClick={() => navigate("/contracts/add")}
        >
          Dodaj Kontrakt
        </Button>
        <Divider />
        <TableContainer>
          <Table variant='simple'>
          <Thead>
              <Tr>
                <Th>Numer Kontraktu</Th>
                <Th>Nazwa</Th>
                <Th>Partner Biznesowy</Th>
                <Th>Data Podpisania</Th>
                <Th>Data Ważności</Th>
                <Th>Status</Th>
                <Th>Akcja</Th>
              </Tr>
          </Thead>
          <Tbody>
              <Tr>
              <Td textColor={"blue.300"}>917</Td>
              <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"blue.300"}>aktywny</Td>
                <Td>
                <Stack direction="row" spacing={1} align="center">
                      <Button
                        colorScheme="gray"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />
                      </Button>
                      <Button
                        colorScheme="telegram"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button
                        colorScheme="red"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                </Td>
              </Tr>
              <Tr>
              <Td textColor={"blue.300"}>444</Td>
              <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"blue.300"}>aktywny</Td>
                <Td>
                <Stack direction="row" spacing={1} align="center">
                      <Button
                        colorScheme="gray"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />
                      </Button>
                      <Button
                        colorScheme="telegram"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button
                        colorScheme="red"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                </Td>
              </Tr>
              <Tr>
              <Td textColor={"red"}>018</Td>
                <Td>nazwa</Td>
                <Td>partner</Td>
                <Td>00/00/0000</Td>
                <Td>11/11/1111</Td>
                <Td textColor={"red"}>wygasły</Td>
                <Td>
                <Stack direction="row" spacing={1} align="center">
                      <Button
                        colorScheme="gray"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />
                      </Button>
                      <Button
                        colorScheme="telegram"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button
                        colorScheme="red"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                </Td>
              </Tr>
              {data2?.map(({ numer, nazwa, partner, dataPodpisania, dataWaznosci, status }) => (
                <Tr key={numer}>
                  <Td>{numer}</Td>
                  <Td>{nazwa}</Td> 
                  <Td>{partner}</Td>
                  <Td>{dataPodpisania}</Td>
                  <Td>{dataWaznosci}</Td>
                  <Td>{status}</Td>
                  <Td>
                    <Stack direction="row" spacing={1} align="center">
                      <Button
                        colorScheme="green"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <ViewIcon boxSize={4} color="##fcfced" />
                      </Button>
                      <Button
                        colorScheme="yellow"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <EditIcon boxSize={4} color="#fcfced" />
                      </Button>
                      <Button
                        colorScheme="red"
                        padding={3}
                        size="md"
                        borderRadius="xl"
                      >
                        <DeleteIcon boxSize={4} color="#fcfced" />
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        </Box>
        <Box >
          <Button
            colorScheme="blue" mb={1} padding={3} size="md" borderRadius="xl"
            onClick={() => navigate("/contractors/add")}>Dodaj Kontrahenta
          </Button>
          <Button
            colorScheme="orange" mb={1} padding={3} ml="2" size="md" borderRadius="xl"
            onClick={() => navigate("/contractors/view")}>Pokaż Kontrahenta
          </Button>
          <Divider />
          <TableContainer>
          <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nazwa kontrahenta</Th>
                  <Th>Adres</Th>
                  <Th>Email</Th>
                  <Th>NIP</Th>
                  <Th>Akcja</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map(({ name, city, country, email, nip }) => (
                  <Tr key={nip}>
                    <Td>{name}</Td>
                    <Td>{country}, {city}</Td>
                    <Td>{email}</Td>
                    <Td>{nip}</Td>
                    <Td>
                      <Stack direction="row" spacing={1} align="center">
                        <Button colorScheme="green" padding={3} size="md" borderRadius="xl"
                        //</Stack>onClick={() => navigate("/contractors/view")}
                        >
                          <ViewIcon boxSize={4} color="##fcfced" />

                        </Button>
                        <Button colorScheme="yellow" padding={3} size="md" borderRadius="xl">
                          <EditIcon boxSize={4} color="#fcfced" />
                        </Button>
                        <Button colorScheme="red" padding={3} size="md" borderRadius="xl">
                          <DeleteIcon boxSize={4} color="#fcfced" />
                        </Button>
                      </Stack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>  
          
        </Box>
        <Box bg='blue.500' borderRadius='xl'>
        <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(242, 136, 70)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(242, 136, 70)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(242, 136, 70)', color: '#fff' }}
                  icon={<CalendarIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Spotkanie Biznesowe</h3>
                  <h4 className="vertical-timeline-element-subtitle">Data: ...</h4>
                  <p>
                    Spotkanie z Janem Kowalskim przy ul. Pięknej 20, o godz. 11:00
                  </p>
                  
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(222, 82, 47)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(222, 82, 47)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(222, 82, 47)', color: '#fff' }}
                  icon={<WarningTwoIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Wygasająca umowa!</h3>
                  <h4 className="vertical-timeline-element-subtitle">Umowa wygasa: 11.12.2023</h4>
                  <p>
                    Przejdź do kontraktów [link] aby zobaczyć szczegóły wygasającej umowy
                  </p>
                  
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(157, 196, 224)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(157, 196, 224)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(157, 196, 224)', color: '#fff' }}
                  icon={<CheckIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Dodano nowego klienta</h3>
                  <h4 className="vertical-timeline-element-subtitle">Data: ...</h4>
                  <p>
                    Przejdź do modułu kontrachentów [link] aby zobaczyć szczegóły
                  </p>
                  
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(41, 52, 105)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(41, 52, 105)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(41, 52, 105)', color: '#fff' }}
                  icon={<ViewIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Podsumowanie miesięczne</h3>
                  <h4 className="vertical-timeline-element-subtitle">Data: na koniec każdego miesiąca</h4>
                  <p>
                    Przejdź do raportów [link] aby zobaczyć szczegółowy raport z całego miesiąca
                  </p>
                  
                </VerticalTimelineElement>
              </VerticalTimeline>
        </Box>
        <Box bg='gray.100' h='700px' borderRadius='xl'>  
        <Button 
                  colorScheme="blue"
                  mb={2}
                  padding={3}
                  size="md"
                  borderRadius="xl"
                  onClick={onOpen}
                >Dodaj Wydarzenie</Button>    
        <Stack direction="row" spacing={4}>
        
        <Calendar events={events} />
        
              <CalendarModalPage isOpen={isOpen} onClose={onClose} />
              </Stack> 
        </Box>
      </SimpleGrid>  
    </DashboardView >
  );
};
export default DashboardPage;
