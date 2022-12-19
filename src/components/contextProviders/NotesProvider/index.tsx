import React, { useState, useMemo } from "react"
import NotesContext from "../../../context/ProjectOverview/BodyShopOverview/notesContext"

interface NotesProviderProps {
  children: JSX.Element
}

export default function NotesProvider({ children }: NotesProviderProps) {
  const [editorState, setEditorState] = useState<any>()

  const value = useMemo(() => ({ editorState, setEditorState }), [editorState])

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}
