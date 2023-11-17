import { Button, Input, Stack, chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { defaultValues, schema } from "./config";
import { LoginFormData } from "../../../../utils/types";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginFormData) => console.log(data);

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Input
          {...(register("email"), { required: true })}
          placeholder="E-mail lub login"
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
        />
        <Input
          {...(register("password"), { required: true })}
          placeholder="Hasło"
          bg={"gray.100"}
          border={0}
          color={"gray.500"}
          _placeholder={{
            color: "gray.500",
          }}
        />
        <Button
          fontFamily={"heading"}
          mt={8}
          w={"full"}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          type="submit"
        >
          Zaloguj się
        </Button>
      </Stack>
    </chakra.form>
  );
};

export default LoginForm;
