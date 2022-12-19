import { createContext } from "react"
import { SetState } from "ahooks/lib/useSetState"

interface ThemeCtx {
  editorState: any
  setEditorState: SetState<any>
}

const NotesContext = createContext<ThemeCtx>({
  editorState: null,
  setEditorState: () => {},
})

export default NotesContext
