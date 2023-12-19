import React, { useContext } from 'react'
import PopupContext from './context/PopupContext'

export default function Popup() {
    const { popup, setPopup } = useContext(PopupContext);
    return (
        <div className={`overlay ${popup ? '' : 'close'}`} onClick={() => setPopup()}>
            <div>❌</div>

            <div className='popup'>
                {popup}
            </div></div>
    )
}
