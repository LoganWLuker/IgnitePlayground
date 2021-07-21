import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text, Button, Header, TextField } from "../../components"
import { useNavigation } from "@react-navigation/native"
//import { RootNavigator, RootParamList } from "../../navigators/root-navigator"
import { CONTINUE, CONTINUE_TEXT } from "../../screens"
// import { useStores } from "../../models"
import { color } from "../../theme"
// import { createStackNavigator } from "@react-navigation/stack"
// import { setRootNavigation } from "../../navigators"

import { useStores } from "../../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}
export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  const { isLoggedIn } = userStore

  // Pull in navigation via hook
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const nextScreen = () => navigation.navigate("mainStack")


  const [username, onUserChange] = React.useState("Alan");
  const [password, onPassChange] = React.useState("123");
  
  const checkLogin = async function(){

    if( isLoggedIn ){
      await userStore.logout()
    }else{

    
      // if(username == "Alan" && password == "123") {
      //   nextScreen()
      // }else {
      //   alert("username or password is incorrect")
      // }

      alert('trying')
      const thing = await userStore.login(username, password)
      alert('View is done: ' + thing )
    }
  }

  return (
    <Screen style={ROOT} preset="scroll">
        <Header
          leftIcon="back"
          onLeftPress={goBack}
        />
      <Text preset="header" text={`Are you logged in? ${isLoggedIn}`} />
      <Text>Username: </Text>
      <TextField value={username} onChangeText={onUserChange}/>
      <Text>Password: </Text>
      <TextField value={password} onChangeText={onPassChange}/>
      <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            text={ isLoggedIn ? 'Logout' : 'Login' }
            onPress={checkLogin}
          />
    </Screen>
  )
})
