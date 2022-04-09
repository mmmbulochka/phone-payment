import type {NextPage} from 'next';
import Link from 'next/link';
import {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Modal from '../components/modal';
import {Plus} from 'baseui/icon';
import {Input} from 'baseui/input';
import {Button as BaseuiButton} from 'baseui/button';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-color: black;
  border-width: 2px;
  gap: 30px;
  margin-top: 20px;
`;
const InputS = styled.div`
  display: flex;
  margin-top: 30px;
`;
const PlusS = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonPlus = styled.button`
  border: none;
  background-color: white;
  padding: 20px;
  cursor: pointer;
`;

// todo
const ButtonLink = styled.a`
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = (props) => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [operators, setOperators] = useState(['MTS', 'Beeline', 'Megafon']);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div>Выберите оператор</div>
      <Content>
        {operators.map((operator: any) => {
          return (
            <Link href={`/payment/${operator}`.toLowerCase()} key={operator}>
              <ButtonLink>
                <Button label={operator} />
              </ButtonLink>
            </Link>
          );
        })}
      </Content>
      <PlusS>
        <ButtonPlus onClick={handleOpen}>
          <Plus size={64} />
        </ButtonPlus>
      </PlusS>

      <Modal
        content={
          <div>
            <div>Add one more</div>
            <InputS>
              <Input
                autoFocus
                type={'text'}
                value={name}
                onChange={(event: any) => setName(event.target.value)}
              />
              <BaseuiButton
                onClick={() => {
                  if (!name) {
                    return;
                  }
                  setOperators([...operators, name]);
                  setName('');
                  handleClose();
                }}
              >
                Add
              </BaseuiButton>
            </InputS>
          </div>
        }
        open={open}
        handleAdd={() => {
          if (!name) {
            return;
          }
          setOperators([...operators, name]);
          setName('');
          handleClose();
        }}
        onClose={handleClose}
      />
    </div>
  );
};

export default Home;
