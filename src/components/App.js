import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <Provider>
            <QueryClientProvider client={queryClient}>
              <LeagueTable />
            </QueryClientProvider>
          </Provider>
        </Row>
      </Container>
    </div>
  );
};

export default App;
