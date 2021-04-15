import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classes from './RichTextEditor.module.css';

export const RichTextEditor = ({ commentRef }) => {
  return (
    <CKEditor
      className={classes.CKEditor}
      editor={ClassicEditor}
      data="<p></p>"
      ref={commentRef}
      onReady={(editor) => {
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
};
