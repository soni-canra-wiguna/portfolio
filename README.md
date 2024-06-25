--green-primary: #31ff6c;
--green-primary-hover: #2ef066;
--green-40: #1d9941;
--green-40-hoever: #1b903d;
--green-60: #14662b;
--green-80: #0a3316;
--blue-primary: #0c6fff;
--blue-40: #074399;
--blue-60: #052c66;
--blue-80: #021633;
--coral-primary: #ff687f;
--coral-40: #993e4c;
--coral-60: #662a33;
--coral-80: #331519;
--lilac-primary: #e5cdec;
--lilac-40: #897b8e;
--lilac-60: #5c525e;
--lilac-80: #2e292f;
--black-primary: #000;
--black-primary-hover: #191919;
--black-10: #1a1a1a;
--black-10-hover: #313131;
--black-20: #333;
--black-20-hover: #474747;
--black-30: #4d4d4d;
--black-40: #666;
--black-50: grey;
--black-60: #c9c5ca;
--black-70: #f4eff4;
--white-primary: #fff;
--white-primary-hover: #f0f0f0;
--white-divider: hsla(0,0%,100%,.1);
--white-overlay: rgba(0,0,0,.9);
--white-model: rgba(0,0,0,.6);
--white-mark: rgba(0,0,0,.1);
--white-caption: hsla(0,0%,100%,.6);
--white-border: hsla(0,0%,100%,.05);
--white-modal: rgba(0,0,0,.9);
color-scheme: dark;

link tiptap.js
import './styles.scss'

import Code from '@tiptap/extension-code'
import Document from '@tiptap/extension-document'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import React, { useCallback } from 'react'

export default () => {
const editor = useEditor({
extensions: [
Document,
Paragraph,
Text,
Code,
Link.configure({
openOnClick: false,
autolink: true,
defaultProtocol: 'https',
}),
],
content: `         <p>
          Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
        </p>
        <p>
          By default every link will get a <code>rel="noopener noreferrer nofollow"</code> attribute. It’s configurable though.
        </p>
      `,
})

const setLink = useCallback(() => {
const previousUrl = editor.getAttributes('link').href
const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()

}, [editor])

if (!editor) {
return null
}

return (
<>
<div className="control-group">
<div className="button-group">
<button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
Set link
</button>
<button
onClick={() => editor.chain().focus().unsetLink().run()}
disabled={!editor.isActive('link')} >
Unset link
</button>
</div>
</div>
<EditorContent editor={editor} />
</>
)
}
