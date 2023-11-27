import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Stack,
  } from "@chakra-ui/react";
  
  type Props = {
    isOpen: any;
    onClose: any;
  };
  
  const ModalPage = ({ isOpen, onClose }: Props) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edycja Kontrachentów</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Stack spacing={3}>
          <Input placeholder='Nazwa kontrachenta'/>
          
          <Input placeholder='Numer kontraktu' />
          <Input placeholder='Dane kontaktowe' />
          <Input placeholder='Rodzaj'/>
          
          <Input placeholder='Status' />
          <Input placeholder='Opis' />
          </Stack>
          </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Zapisz
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
            Zamknij
           
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  export default ModalPage;