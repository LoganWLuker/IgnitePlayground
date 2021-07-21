import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text, Header, Button } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { CONTINUE_TEXT } from "../../screens"
// import { useStores } from "../../models"
import { color } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const DashboardScreen = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const nextScreen = () => navigation.navigate("welcome")
  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        leftIcon="back"
        onLeftPress={goBack}
      />
      <Text preset="header" text="This is the dashboard. There will be components here in the future" />
      <Button tx="dashboardScreen.logout" textStyle={CONTINUE_TEXT} onPress={nextScreen}/>
    </Screen>
  )
})
