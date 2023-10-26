import {rerenderEntireTree} from "./render"
import {addNewPost, state} from "./redux/state"

rerenderEntireTree(state, addNewPost)