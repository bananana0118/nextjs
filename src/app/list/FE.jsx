import React, { Component } from 'react';
import dynamic from 'next/dynamic';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/third_party/embedly.min.js';


// That's where the magic happens 
const FroalaEditorInput = dynamic(import('react-froala-wysiwyg'), {
  ssr: false
});

class FroalaEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.model
    };

    this.config = {
      key: 'keykeykeykeykeykeykeykeykeykeykeykeykey ;) ==',
      toolbarButtons: 	['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo','trackChanges','markdown'],
      charCounterMax: 1000,
    }
  }

  handleModelChange = model => {
    this.props.handleEditorChange(model);
  };

  render() {
      return (
        <FroalaEditorInput
          id={this.props.editorId}
          config={this.config}
          model={this.props.model}
          onModelChange={this.props.handleEditorChange}
         />
      );
  }
}

export default FroalaEditor;