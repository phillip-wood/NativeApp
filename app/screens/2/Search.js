import React from "react"
import { StyleSheet } from "react-native"
import * as Yup from "yup"

import {AppForm, AppFormPicker, SubmitButton} from "../../components/forms"
import Screen from "../../components/Screen"

const Brands = [
  { label: "Nike", value: 1 },
  { label: "Jordan", value: 2 },
  { label: "Converse", value: 3 },
]

const validationSchema = Yup.object().shape({
  brand: Yup.object().required().nullable().label("Brand"),
  model: Yup.object().required().nullable().label("Brand"),
})

function Search() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          brand: null,
          model: null,
          submodel: null,
          colorway: null,
          condition: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker items={Brands} name="brand" placeholder="Brand" />
        <AppFormPicker items={Brands} name="model" placeholder="Model" />
        <AppFormPicker items={Brands} name="submodel" placeholder="SubModel" />
        <AppFormPicker items={Brands} name="colorway" placeholder="Colorway" />
        <AppFormPicker items={Brands} name="condition" placeholder="Condition" />
        <SubmitButton title="Search" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default Search