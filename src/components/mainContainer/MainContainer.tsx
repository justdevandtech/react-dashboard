import { Container } from 'react-bootstrap';
import './mainContainer.css';
import { NavBar } from "./NavBar"
import { Values } from './Values';
import { TransactionTable } from './TransactionTable';

export const MainContainer = () => {
  return (
    <section className="interface">
        <NavBar />
        <Container className="main-container">
        <div className="D-name">
            <h1>Dashboard</h1>
        </div>
        <Values />
        <TransactionTable />
        </Container>
    </section>
  )
}
