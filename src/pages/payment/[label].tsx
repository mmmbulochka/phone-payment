import styled from 'styled-components';
import {useRouter} from 'next/router';
import * as React from 'react';
import {MaskedInput} from 'baseui/input';
import {FormControl} from 'baseui/form-control';
import {Button} from 'baseui/button';
import Modal from '../../components/modal';
import {useState} from 'react';
import Delete from 'baseui/icon/delete';

const ModalS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const FailS = styled.div`
  color: red;
`;
const SuccessS = styled.div`
  color: green;
`;
const ButtonS = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 30px;
  margin-top: 20px;
`;

function Label() {
  const router = useRouter();
  const {label} = router.query;
  const [number, setNumber] = React.useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log('open', open);

  return (
    <Div>
      Payment: {label}
      <MaskedInput
        startEnhancer='+7'
        placeholder='Phone number'
        mask='(999) 999-9999'
      />
      <FormControl caption={'1-1000'}>
        <MaskedInput
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder='Total'
          mask='9999'
          error={number > 1000}
        />
      </FormControl>
      <Button onClick={handleOpen}>Pay</Button>
      {/*<Modal*/}
      {/*  onClose={handleClose}*/}
      {/*  open={open}*/}
      {/*  content={*/}
      {/*    <ModalS>*/}
      {/*      <ButtonS onClick={handleClose}>*/}
      {/*        <Delete size={44} />*/}
      {/*      </ButtonS>*/}
      {/*      <SuccessS>SUCCESS</SuccessS>*/}
      {/*    </ModalS>*/}
      {/*  }*/}
      {/*/>*/}
      <Modal
        onClose={handleClose}
        open={open}
        content={
          <ModalS>
            <ButtonS onClick={handleClose}>
              <Delete size={44} />
            </ButtonS>
            <FailS>FAIL</FailS>
          </ModalS>
        }
      />
    </Div>
  );
}

export default Label;
