import React from 'react'

export const Toast = ({toastText, onCloseToast, toastColor}) => {
    return (
        <div className={`toast ${toastColor}`} >
           <p>{toastText}</p> 
           <i onClick={onCloseToast} class="fas fa-times"></i> 
        </div>
    )
}
