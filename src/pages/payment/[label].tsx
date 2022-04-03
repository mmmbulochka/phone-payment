import styled from 'styled-components'
import { useRouter } from 'next/router'

const LabelS = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 10px;
  margin-top: 20px;
  width: 300px;
    `;

const PhoneForm = styled.input`
  border-bottom-color: rgb(118, 118, 118, 118);
  padding: 8px;
`


function Label() {
    const router = useRouter()
    const { label } = router.query

    return <LabelS>
        <Div>
            Payment: {label}

        <PhoneForm type={"number"} size={50}/>
            <PhoneForm type={"number"} size={50}/>

        <input type={"number"} size={50}/>
    </Div>
    </LabelS>
}

export default Label