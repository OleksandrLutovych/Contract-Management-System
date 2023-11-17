import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import LoginForm from "../../forms/LoginForm";

const AuthenticationPage = () => {
  return (
    <Box
      position={"relative"}
      height="100%"
      width="100%"
      m="auto"
      overflow="hidden"
      bgColor="rgb(203,218,238)"
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        mx="auto"
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Image src="https://usercentrics.com/wp-content/uploads/2022/09/uc_google_500x500-1.svg?fbclid=IwAR23v3o1HHmRqTs3yj7vn-kt5NOwH_N2gUdmEIEy1msqC1lS_OF4eYlklW8" 
        mt={8}/>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Logowanie do Twojego konta
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Witaj w naszym panelu użytkownika! Cieszymy się, że jesteś z nami.
              Aby uzyskać dostęp do swojego konta, proszę zalogować się poniżej.
            </Text>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Jeśli jesteś tutaj po raz pierwszy, skorzystaj z opcji
              'Rejestracja' lub 'Zarejestruj się', aby stworzyć nowe konto.
              Dzięki naszemu panelowi użytkownika będziesz mógł zarządzać swoimi
              danymi, sprawdzać status zamówień oraz korzystać z wielu innych
              funkcji. Zaloguj się teraz i skorzystaj z naszych usług!
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <LoginForm />
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthenticationPage;
