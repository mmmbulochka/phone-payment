import styled from 'styled-components'
import { useRouter } from 'next/router'
import * as React from "react";
import {MaskedInput} from 'baseui/input';
import {FormControl} from 'baseui/form-control';
import { Button } from "baseui/button";

// const LabelS = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 30px;
// `

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 30px;
  margin-top: 20px;

    `;

const PhoneForm = styled.input`
  border-bottom-color: rgb(118, 118, 118, 118);
  padding: 8px;
`


function Label() {
    const router = useRouter()
    const { label } = router.query
    const [number, setNumber] = React.useState("");

    return <Div>
            Payment: {label}
          <MaskedInput startEnhancer="+7" placeholder="Phone number" mask="(999) 999-9999" />
            <FormControl caption={'1-1000'}>
                <MaskedInput value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Total" mask="9999" error={number > 1000}/>
            </FormControl>
          <Button>Pay</Button>
    </Div>

}

export default Label