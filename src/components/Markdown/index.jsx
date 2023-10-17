import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import "codemirror/lib/codemirror.css";
import React from "react";
const Markdown = () => {
  return (
    <Editor
      initialValue="hello 高天阳!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default Markdown;
