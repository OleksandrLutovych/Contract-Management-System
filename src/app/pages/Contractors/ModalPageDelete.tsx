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
  
  const ModalPageDelete = ({ isOpen, onClose }: Props) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Czy chcesz usunąć kontrachenta?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        </ModalBody>
  
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Tak
            </Button>
            <Button colorScheme="green" mr={3} onClick={onClose}>
            Nie
           
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  export default ModalPageDelete;