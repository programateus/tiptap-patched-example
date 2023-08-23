import { EditorContent, useEditor, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { TableCellView } from "./TableCellView";

const ExtendedCell = TableCell.extend({
  addNodeView() {
    return (props) =>
      ReactNodeViewRenderer(TableCellView, {
        as: "td",
        attrs: props.node.attrs,
      })(props);
  },
});

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit, Table, ExtendedCell, TableHeader, TableRow],
    content: "",
  });

  return (
    <div>
      <button
        style={{ margin: "4px" }}
        onClick={() =>
          editor
            ?.chain()
            .focus()
            .insertTable({ cols: 3, rows: 3, withHeaderRow: true })
            .run()
        }
      >
        Insert table
      </button>
      <button
        style={{ margin: "4px" }}
        onClick={() => editor?.chain().focus().mergeCells().run()}
      >
        Merge Cells
      </button>
      <EditorContent editor={editor} />
    </div>
  );
}
