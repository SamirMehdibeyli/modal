import {ReactNode} from 'react'
import './modal-content.scss'


export interface ModalContentProps {
    children: ReactNode
}

export const ModalContent = ({children} : ModalContentProps) => {
    return (
      <div className='modal-content'>
        {children}
      </div>  
    )
}