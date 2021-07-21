import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const QuestionModel = types
  .model("Question")
  .props({
    id: types.identifier,
    user: types.maybe(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type QuestionType = Instance<typeof QuestionModel>
export interface Question extends QuestionType {}
type QuestionSnapshotType = SnapshotOut<typeof QuestionModel>
export interface QuestionSnapshot extends QuestionSnapshotType {}
export const createQuestionDefaultModel = () => types.optional(QuestionModel, {})
