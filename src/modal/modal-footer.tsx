import {ReactNode} from 'react'
import './modal-footer.scss'

interface ModalFooterProps {
    children: ReactNode
}


export const ModalFooter = ({children}: ModalFooterProps) => {
    return(
        <footer className='modal-footer'>
            {children}
        </footer>
    )
}
