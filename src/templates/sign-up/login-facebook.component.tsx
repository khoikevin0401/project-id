import React, { FC } from "react"
import { Button, Icon } from "@chakra-ui/react"

import { Text } from "@Components/common/ui"

import FacebookIcon from "@Assets/svg/sign-up.svg/facebook-icon.svg"

const LoginWithFacebook: FC = () => {
  return (
    <Button
      variant={"sign-up"}
      color={"#FFFFFF"}
      border={"1px solid #CACACA"}
      bg={"#385499"}
    >
      <Icon w={"18px"} height={"19px"} as={FacebookIcon} />
      <Text ml={"16px"}>Sign up with Facebook</Text>
    </Button>
  )
}

export default LoginWithFacebook
