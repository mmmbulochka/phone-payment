import type { NextPage } from 'next'
import Link from "next/link";
import {useEffect, useState} from "react";
import styled from 'styled-components'
import Buttons from "../components/button";
import ModalAdd from "../components/modal";
import { Plus } from "baseui/icon";

// const HomeS = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 30px;
// `
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 30px;
  margin-top: 20px;
`
const PlusS = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonPlus = styled.button`
  border: none;
  background-color: white;
  padding: 20px;
  cursor: pointer;
`
// const Image = styled.img`
//   width: 40px;
//   display: block;
//   justify-content: center;
// `
const A = styled.a`
  display: flex;
  flex-direction: column;
`


const Home: NextPage = (props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(['Beeline', 'MTS', 'Megafon',])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return <div>
    <div>
      Выберите оператор
    </div>
    <Content>
      {list.map((element) => {
        return <Link href={`/payment/${element}`.toLowerCase()} key={element}>
            <A><Buttons
                label={element}
            ></Buttons></A>
        </Link>
      })}
    </Content>
    <PlusS>
        <ButtonPlus onClick={handleOpen}>
            <Plus size={64}/>
        </ButtonPlus>
    </PlusS>

    <ModalAdd open={open} handleAdd={(name: string) => {
      setList([...list, name])
    }} onClose={handleClose}/>
    
  </div>

}

export default Home
