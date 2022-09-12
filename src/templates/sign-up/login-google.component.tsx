import React, { FC } from "react"
import { Button, Icon } from "@chakra-ui/react"
import { useGoogleLogin } from "@react-oauth/google"

import GoogleIcon from "@Assets/svg/sign-up.svg/google-icon.svg"
import { Text } from "@Components/common/ui"

const LoginWithGoogle: FC = () => {

  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  })

  return (
    <Button
      variant={"sign-up"}
      mb={"19px"}
      color={"#585858"}
      border={"1px solid #CACACA"}
      bg={"#FFFFFF"}
      onClick={() => login()}
    >
      <Icon w={"18px"} height={"19px"} as={GoogleIcon} />
      <Text ml={"16px"}>Sign up with Google</Text>
    </Button>
  )
}

export default LoginWithGoogle
