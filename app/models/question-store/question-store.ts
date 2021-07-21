import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { QuestionModel } from ".."

/**
 * Model description here for TypeScript hints.
 */
export const QuestionStoreModel = types
  .model("QuestionStore")
  .props({
    questions: types.optional(types.array(QuestionModel), []),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type QuestionStoreType = Instance<typeof QuestionStoreModel>
export interface QuestionStore extends QuestionStoreType {}
type QuestionStoreSnapshotType = SnapshotOut<typeof QuestionStoreModel>
export interface QuestionStoreSnapshot extends QuestionStoreSnapshotType {}
export const createQuestionStoreDefaultModel = () => types.optional(QuestionStoreModel, {})
