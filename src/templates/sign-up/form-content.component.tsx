import React, { FC } from "react"
import { Box, Icon } from "@chakra-ui/react"

import { Text } from "@Components/common/ui"

import GlobeIcon from "@Assets/svg/sign-up.svg/signup-icon1.svg"
import FileTextIcon from "@Assets/svg/sign-up.svg/signup-icon2.svg"
import BookOpenIcon from "@Assets/svg/sign-up.svg/signup-icon3.svg"

const FormContent: FC = () => {
  return (
    <Box h={"full"}>
      <Text fontSize={"40px"} fontWeight={"bold"} lineHeight={"48px"}>
        Join the TheBrand community
      </Text>
      <Box mt={"94px"}>
        <Box display={"flex"} alignItems={"center"} mb={"43px"}>
          <Icon as={GlobeIcon} w={"30px"} h={"30px"} />
          <Text ml={"20px"} fontSize={"20px"} lineHeight={"24px"}>
            Gain access to content from all over Malaysia
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={"43px"}>
          <Icon as={FileTextIcon} w={"30px"} h={"30px"} />
          <Text ml={"20px"} fontSize={"20px"} lineHeight={"24px"}>
            Get quality content
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} mb={"43px"}>
          <Icon as={BookOpenIcon} w={"30px"} h={"30px"} />
          <Text ml={"20px"} fontSize={"20px"} lineHeight={"24px"}>
            Easy way for 'independent learning'
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default FormContent
