import {
  Icon, IconButton, CloseButton, 
  Image, Avatar, Text,
  Box, BoxProps, Flex, FlexProps, HStack, Drawer, DrawerContent, Divider,
  Menu, MenuButton, MenuItem, MenuList,
  useColorModeValue, useDisclosure,
  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { GoPeople } from "react-icons/go";
import { IoNewspaperOutline, IoDocumentTextOutline, IoCalendarNumberOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Kontrahenci", icon: GoPeople, url: "/contractors" },
  { name: "Kontrakty", icon: IoDocumentTextOutline, url: "/contracts" },
  { name: "Raporty", icon: TbReportAnalytics, url: "/reports" },
  { name: "Kalendarz", icon: IoCalendarNumberOutline, url: "/calendar" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="5px"
      borderRightColor={useColorModeValue("blue.700", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex alignItems="center" h="250" mx="3">
        <Flex
          alignItems="center"
          mx="4"
          onClick={() => navigate("*")}
          cursor="pointer"
          ml="10px"
        >
          <Image
            //src="https://i.ibb.co/VMrBTrx/Microsoft-Teams-image-5.png"
            src="https://i.ibb.co/xzZgLpV/Microsoft-Teams-image-6.png"
          />
        </Flex>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
     

      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => navigate(link.url)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="6"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "orange.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="18"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 6 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("blue.700", "white")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("blue.700", "white")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "3" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={1}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <HStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="px"
                  ml="0"
                >
                  <Text fontSize="sm" color="white">Justina Clark</Text>
                  <Text fontSize="xs" color="orange"  ml="1" py={0}>
                    Admin
                  </Text>
                </HStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("blue.700", "gray.700")}
            >
              <MenuItem>Kontrahenci</MenuItem>
              <MenuItem>Klienci</MenuItem>
              <MenuItem>Raporty</MenuItem>
              <MenuItem>Kalendarz</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

type Props = {
  children: JSX.Element;
};

const DashboardContainer = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    
    <Box minH="100vh" bg={useColorModeValue("blue.900", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />

      
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Box
          bgColor="white"
          padding={5}
          borderRadius="md"
          width="100%"
          height="100%"
        >{children}
         
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContainer;
