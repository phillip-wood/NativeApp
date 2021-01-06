import React from "react"
// uses react context like redux
import { useFormikContext } from "formik"

import AppButton from "../AppButton"

function SubmitButton({ title }) {
    //destructure react context to pass props formik form
  const { handleSubmit } = useFormikContext()

  return <AppButton title={title} onPress={handleSubmit} />
}

export default SubmitButton
