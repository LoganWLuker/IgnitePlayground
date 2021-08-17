import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { async } from "validate.js"

/**
 * Model description here for TypeScript hints.
 */
//let LOGGED_IN, LOGGED_OUT, PENDING_LOGIN;
export const UserStoreModel = types
  .model("UserStore")
  .props({
    username: types.optional(types.string, ''),
    //state: types.enumeration('State', [LOGGED_IN, LOGGED_OUT, PENDING_LOGIN]),
    //loginFailed: false,
  })
  .views((self) => ({
    get isLoggedIn() {
      return self.username != ''
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setUsername: username => {
      self.username = username 
    }
  }))
  .actions((self) => ({
    login: async (username: string, password: string) => {
      __DEV__ && console.tron.log('Logging in ' + username)
      // yield delay(5, '', false)
      await new Promise( resolve => setTimeout(resolve, 1 * 1000))
      self.setUsername(username)
      __DEV__ && console.tron.log('you logged in')
      return username
    },
    logout: () => {
      self.setUsername(undefined)
    }
    // setUsername: (username) => {
    //   self.username = username
    // }
    // login: flow(function* login(creds) {
    //   self.state = PENDING_LOGIN
      
    //   try {
    //     //self.username = yield client.login(creds).username
    //     self.state = LOGGED_IN
    //   } catch (err) {
    //     self.state = LOGGED_OUT
    //     //self.loginFailed = true
    //   }
    // }),
    // logout: flow(function* logout() {
    //   try {
    //     //yield client.logout()
    //     self.state = LOGGED_OUT
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type UserStoreType = Instance<typeof UserStoreModel>
export interface UserStore extends UserStoreType {}
type UserStoreSnapshotType = SnapshotOut<typeof UserStoreModel>
export interface UserStoreSnapshot extends UserStoreSnapshotType {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})



// because reasons
// function delay<T>(time: number, value: T, shouldThrow = false): Promise<T> {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if (shouldThrow) reject(value)
//           else resolve(value)
//       }, time)
//   })
// }