import React from 'react';
import '../contentCss/postitem.css'

const RemovePostWindow = ({removeWindow, post, remove}) => {
      return (
            <div onClick={() => remove(post)} className={removeWindow ? 'removepost' : 'removepostdisplay'}>
                  <img src='/facebook/apiimg/remove.jpg' />
                  <p>Remove</p>
            </div>
      );
};

export default RemovePostWindow;