import styled from 'styled-components';
import {useRouter} from 'next/router';
import * as React from 'react';
import {MaskedInput} from 'baseui/input';
import {FormControl} from 'baseui/form-control';
import {Button} from 'baseui/button';
import Modal from '../../components/modal';
import {useState} from 'react';
// @ts-ignore
import Delete from 'baseui/icon/delete';
import {makePayment} from '../../connections/payments';

const ModalS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Fail = styled.div`
  color: red;
`;
const Success = styled.div`
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

const LabelS = styled.div`
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
  const [requested, setRequested] = useState(false);
  const [coast, setCoast] = useState(1);
  const [response, setResponse] = useState<boolean | null>(null);
  const [phone, setPhone] = useState('');

  const handleOpen = async () => {
    if (requested || coast > 1000 || phone.trim().length < 14) {
      return;
    }
    setRequested(true);
    const response = await makePayment();
    setRequested(false);
    setResponse(response);
  };
  const handleClose = () => {
    setResponse(null);
  };

  const handleCloseSuccess = () => {
    router.push('/');
  };

  return (
    <LabelS>
      Payment: {label}
      <MaskedInput
        value={phone}
        onChange={(e: any) => setPhone(e.target.value)}
        startEnhancer='+7'
        placeholder='Phone number'
        mask='(999) 999-9999'
      />
      <FormControl caption={'1-1000'}>
        <MaskedInput
          value={coast}
          onChange={(e: any) => setCoast(e.target.value)}
          placeholder='Total'
          mask='9999'
          error={coast > 1000}
        />
      </FormControl>
      <Button onClick={handleOpen}>Pay</Button>
      <Modal
        onClose={handleCloseSuccess}
        open={response === true}
        content={
          <ModalS>
            <ButtonS onClick={handleCloseSuccess}>
              <Delete size={44} />
            </ButtonS>
            <Success>SUCCESS</Success>
          </ModalS>
        }
      />
      <Modal
        onClose={handleClose}
        open={response === false}
        content={
          <ModalS>
            <ButtonS onClick={handleClose}>
              <Delete size={44} />
            </ButtonS>
            <Fail>FAIL</Fail>
          </ModalS>
        }
      />
    </LabelS>
  );
}

export default Label;
