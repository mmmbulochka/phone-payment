import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";

const Dialog = styled.div`
  padding: 50px;
  background-color: white;
`

const InputS = styled.div`
    display: flex;
    margin-top: 30px;
`

const ModalS = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  
`

function Modal(props) {
    const [name, setName] = useState('')
    const dialogRef = useRef(null)
    useEffect(() => {
        const listener = (e) => {
            if (e.key === 'Enter'){
                if(!name) {
                    return
                }
                props.handleAdd(name)
                props.onClose()
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown',listener)

        }
    }, [name])
    useEffect(() => {
        const listener = (e) => {
            if (e.key === 'Escape'){
                props.onClose()
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown',listener)

        }
    }, [])
    if(props.open !== true) {
        return null
    }
    return <ModalS onClick={(e) => {
        if(dialogRef.current.contains(e.target)) {
            return
        }
        props.onClose()
    }
    }>

    <Dialog ref={dialogRef}>
        <div>
            Add one more
        </div>
        <InputS>
        <Input autoFocus type={'text'} value={name} onChange={(event) => setName(event.target.value)}/>
        <Button
          onClick={ () => {
            if(!name) {
                return
            }
            props.handleAdd(name)
            props.onClose()
        }}
        >
            Add
        </Button>
        </InputS>
    </Dialog>
    </ModalS>
}

export default Modal