import React from 'react'
import Editor from 'react-medium-editor'

require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

export default (props) => {
    const {text, onChangeText, placeholder, style} = props
    return(
        <Editor
            style={{...styles.container, ...style}}
            text={text}
            onChange={onChangeText}
            options={{
                toolbar: { 
                    buttons: ['bold', 'italic', 'underline', 'h2', 'h3'] 
                },
                placeholder: {
                    text: placeholder,
                    hideOnClick: true, 
                }
            }}
        />
    )
}

const styles = {
    container: {
        padding: 10,
        outlineWidth: 0,
        fontSize: 45,
    }
}