import { Box, Button, chakra, Icon } from "@chakra-ui/react"
import React, { FC } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import {
  InputHookForm,
  InputPasswordHookForm,
} from "@Components/common/hookform"
import { FormValues } from "./sign-up.type"
import { schema } from "./sign-up.schema"
import { Text } from "@Components/common/ui"

import LoginWithGoogle from "./login-google.component"
import LoginWithFacebook from "./login-facebook.component"

const FormSignUp: FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      opt: false,
    },
    resolver: yupResolver(schema),
  })

  const submitForm = async (data: FormValues) => {
    console.log(data)
  }

  console.log(methods.formState.errors)

  return (
    <Box
      w={"450px"}
      px={"40px"}
      py={"40px"}
      bgColor={"white"}
      transition={"all 0.3s ease"}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          <Box transition={"all 0.3s ease"} mb={"19px"}>
            <InputHookForm name="displayName" label="Display Name" />
          </Box>
          <Box transition={"all 0.3s ease"} mb={"19px"}>
            <InputHookForm name="email" label="Email" />
          </Box>
          <Box transition={"all 0.3s ease"} mb={"19px"}>
            <InputPasswordHookForm name="password" label="Password" />
          </Box>
          <Box mb={"19px"} display={"flex"}>
            <Text
              ml={"20px"}
              fontSize={"12px"}
              lineHeight={"14px"}
              color={"#585858"}
              fontWeight={"bold"}
              fontStyle={"normal"}
              w={"90%"}
            >
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </Text>
          </Box>
          <Button
            variant={"sign-up"}
            mb={"19px"}
            background={"#CACACA"}
            color={"white"}
            type={"submit"}
          >
            <Text>Sign Up</Text>
          </Button>
          <Box
            textAlign={"center"}
            color={"#000000"}
            fontSize={"14px"}
            lineHeight={"17px"}
            fontWeight={"400"}
            mb={"19px"}
          >
            <Text>
              Have an account ?
              <chakra.span color={"yellow.400"} fontWeight={"bold"} mx={"4px"}>
                Log in
              </chakra.span>
            </Text>
          </Box>
          <Box borderBottom={"1px solid #CACACA"} mb={"19px"} />
        </form>
      </FormProvider>
      <LoginWithGoogle />
     <LoginWithFacebook />
    </Box>
  )
}

export default FormSignUp
