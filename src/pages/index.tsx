import React, { Fragment } from "react"
import { Router } from "@reach/router"
import { ChakraProvider } from "@chakra-ui/react"
import { GoogleOAuthProvider } from "@react-oauth/google"

import theme from "@Components/common/theme/theme"
import SignUpPage from "@Templates/sign-up"
import Header from "@Components/header"
import HomePage from "@Templates/home"
import CreatePostPage from "@Templates/create-post"
import { IconFont } from "@Components/common/fonts"

const IndexPage = () => {
  return (
    <Fragment>
    <IconFont/>
    <ChakraProvider theme={theme}>
     
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as any}>
        <Header />
        <Router>
          <HomePage path="/" />
          <SignUpPage path="/sign-up" />
          <CreatePostPage path="/create-post"/>
        </Router>
      </GoogleOAuthProvider>
    </ChakraProvider>
    </Fragment>
  )
}

export default IndexPage
