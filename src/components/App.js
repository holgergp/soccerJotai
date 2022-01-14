import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { Provider } from 'jotai';

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <Provider>
            <LeagueTable />
          </Provider>
        </Row>
      </Container>
    </div>
  );
};

export default App;
