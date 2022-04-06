import styled from 'styled-components';
import {useEffect, useRef, useState} from 'react';

const Dialog = styled.div`
  position: relative;
  padding: 50px;
  background-color: white;
`;

const ModalS = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

function Modal(props) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const listener = (e) => {
      console.log('listener');
      if (e.key === 'Enter') {
        props.handleAdd?.();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [props.handleAdd]);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);
  if (props.open !== true) {
    return null;
  }
  return (
    <ModalS
      onClick={(e) => {
        if (dialogRef.current.contains(e.target)) {
          return;
        }
        props.onClose();
      }}
    >
      <Dialog ref={dialogRef}>{props.content}</Dialog>
    </ModalS>
  );
}

export default Modal;
