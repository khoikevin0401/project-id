import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { Box } from "@chakra-ui/react"

import FormSignUp from "./form-signup.component"
import FormContent from "./form-content.component"

const SignUpPage: FC<RouteComponentProps> = () => {
  return (
    <Box w={"full"}>
      <Box
        w={"full"}
        display={"flex"}
      >
        <Box w={"80%"} display={"flex"} mx={"auto"} pt={"100px"} pb={"50px"}>
          <Box w={"50%"} display={"flex"} justifyContent={"center"}>
            <Box mt={"69px"}>
              <FormContent />
            </Box>
          </Box>

          <Box w={"50%"} display={"flex"} justifyContent={"end"}>
            <FormSignUp />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUpPage
