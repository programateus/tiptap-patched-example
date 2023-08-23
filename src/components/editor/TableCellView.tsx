import { useEffect } from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";

export const TableCellView = ({ updateAttributes, node }: any) => {
  useEffect(() => {
    updateAttributes({
      colspan: node.attrs.colspan,
      rowspan: node.attrs.rowspan,
      colwidth: node.attrs.colwidth,
    });
  }, [
    updateAttributes,
    node.attrs.colspan,
    node.attrs.rowspan,
    node.attrs.colwidth,
  ]);

  return (
    <NodeViewWrapper>
      <NodeViewContent as="p" />

      <div contentEditable={false}>
        <button>Icon</button>
      </div>
    </NodeViewWrapper>
  );
};
