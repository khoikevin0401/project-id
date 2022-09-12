import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { RouteComponentProps } from "@reach/router"
import React, { FC } from "react"

import FormCreatePost from "./form-create-post"

const CreatePostPage: FC<RouteComponentProps> = () => {
  return (
    <Box w={"full"} display={"flex"}>
      <Box w={"25%"}>left content</Box>
      <Box w={"75%"} px={"51px"}>
        <Box py={"40px"}>
          <Tabs>
            <TabList border={"none"}>
              <Tab
                p={0}
                fontSize={"20px"}
                mr={"30px"}
                _focusWithin={{
                  boxShadow: "none",
                }}
                _selected={{
                  color: "black",
                  fontWeight: "600",
                  borderBottom: "2px solid black",
                }}
              >
                Create a Post
              </Tab>
              <Tab
                p={0}
                fontSize={"20px"}
                _focusWithin={{
                  boxShadow: "none",
                }}
                _selected={{
                  color: "black",
                  fontWeight: "600",
                  borderBottom: "2px solid black",
                }}
              >
                Create a Quiz
              </Tab>
            </TabList>

            <TabPanels mt={"40px"}>
              <TabPanel p={"30px"} bg={"white"}>
                <FormCreatePost />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  )
}

export default CreatePostPage
