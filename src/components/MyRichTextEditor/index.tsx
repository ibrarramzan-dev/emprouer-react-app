import React, { useContext, useEffect } from "react"
import { EditorState, ContentState } from "draft-js"
import htmlToDraft from "html-to-draftjs"
import { Editor } from "react-draft-wysiwyg"
import NotesContext from "../../context/ProjectOverview/BodyShopOverview/notesContext"

interface MyRichTextEditorProps {
  html: string | undefined
}

export default function MyRichTextEditor({ html }: MyRichTextEditorProps) {
  const { editorState, setEditorState } = useContext(NotesContext)

  const onEditorStateChange = (editorStateValue: any) => {
    setEditorState(editorStateValue)
  }

  useEffect(() => {
    if (html) {
      const blocksFromHtml = htmlToDraft(html)
      const { contentBlocks, entityMap } = blocksFromHtml

      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap,
      )

      const newEditorState = EditorState.createWithContent(contentState)

      setEditorState(newEditorState)
    }
  }, [])

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        placeholder="Add your content here..."
      />
    </div>
  )
}
