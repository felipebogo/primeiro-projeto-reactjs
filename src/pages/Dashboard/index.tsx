import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2545068?s=460&u=a2698218f7380c2f3a017f3b3f773aec7e617595&v=4"
            alt="Foto"
          />
          <div>
            <strong>Rocket seat unfrom</strong>
            <p>Wasy peasy hight aclmbel e reackt natie form</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2545068?s=460&u=a2698218f7380c2f3a017f3b3f773aec7e617595&v=4"
            alt="Foto"
          />
          <div>
            <strong>Rocket seat unfrom</strong>
            <p>Wasy peasy hight aclmbel e reackt natie form</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2545068?s=460&u=a2698218f7380c2f3a017f3b3f773aec7e617595&v=4"
            alt="Foto"
          />
          <div>
            <strong>Rocket seat unfrom</strong>
            <p>Wasy peasy hight aclmbel e reackt natie form</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
