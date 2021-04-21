import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classes from './RichTextEditor.module.scss';

export const RichTextEditor = ({ commentRef }) => {
  return (
    <CKEditor
      className={classes.CKEditor}
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ['heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo'],
        },
      }}
      data="<p></p>"
      ref={commentRef}
      onReady={editor => {}}
      onChange={(event, editor) => {
        const data = editor.getData();
      }}
      onBlur={(event, editor) => {}}
      onFocus={(event, editor) => {}}
    />
  );
};
