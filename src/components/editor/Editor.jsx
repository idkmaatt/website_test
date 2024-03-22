import React, { useState } from 'react'

const Editable = () => {
    const [content, setContent] = React.useState("")
    const [text, setText] = React.useState("")
    
    const onContentBlur = React.useCallback(evt => setContent(evt.currentTarget.innerHTML))
    
    return (
      <div 
        contentEditable
        onBlur={onContentBlur}
        dangerouslySetInnerHTML={{__html: content}}
        />
      
    )
  }

export default Editable