import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { FC } from "react";
import ContractorsAddForm from "./ContractorsAddForm";
type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const ContractorsAddModalForm: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Dodawanie klienta</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ContractorsAddForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContractorsAddModalForm;
