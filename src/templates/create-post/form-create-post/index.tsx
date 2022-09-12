import React, { FC } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Box } from "@chakra-ui/react"

import { FormValues } from "./form-crreate-post.type"
import { schema } from "./form-create-post.schema"
import { InputHookForm } from "@Components/common/hookform"

const FormCreatePost: FC = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <Box mb={"20px"}>
          <InputHookForm
            name="title"
            label="Title"
            color={"black"}
            noted={"Be specific and imagine you’re asking a question to another person"}
          />
        </Box>
      </form>
    </FormProvider>
  )
}

export default FormCreatePost
