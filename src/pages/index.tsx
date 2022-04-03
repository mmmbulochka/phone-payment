import type { NextPage } from 'next'
import Link from "next/link";
import {useEffect, useState} from "react";
import styled from 'styled-components'
import Button from "../components/button";
import Modal from "../components/modal";

const HomeS = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 10px;
  margin-top: 20px;
`
const Plus = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonPlus = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
  cursor: pointer;
`
const Image = styled.img`
  width: 40px;
  display: block;
  justify-content: center;
`


const Home: NextPage = (props) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(['Beeline', 'MTS', 'Megafon',])
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return <HomeS>
  <div>
    <h2>
      Выберите оператор
    </h2>
    <Content>
      {list.map((element) => {
        return <Link href={`/payment/${element}`.toLowerCase()} key={element}>
            <Button
                label={element}
            ></Button>
        </Link>
      })}
    </Content>
    <Plus>
        <ButtonPlus onClick={handleOpen}>
            <Image src={'plus.png'}/>
        </ButtonPlus>
    </Plus>

    <Modal open={open} handleAdd={(name: string) => {
      setList([...list, name])
    }} onClose={handleClose}/>
    
  </div>
  </HomeS>

}

export default Home
