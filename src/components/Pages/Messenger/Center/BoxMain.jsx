import React from 'react';
import AdditionalActions from "./svg/AdditionalActions";
import AttachFile from "./svg/AttachFile";
import ChooseSticker from "./svg/ChooseSticker";
import Like from "./svg/Like";
import SelectAFileGiv from "./svg/SelectAFileGiv";
import Smiley from "./svg/Smiley";
import '../Center/centerbox.css'

const BoxMain = () => {
      return (
        
          <div className="boxmain">
            <div>
              <AdditionalActions />
            </div>
            <div>
              <AttachFile />
            </div>
            <div>
              <ChooseSticker />
            </div>
            <div>
              <SelectAFileGiv />
            </div>
            <div className='inputdiv'>
              <input
                type="test"
                placeholder="Aa"
              />
              <Smiley />
            </div>
            <div className="light-background d-flex align-items-center justify-content-center">
              <Like />
            </div>
          </div>
       
      );
    };
    
    export default BoxMain;