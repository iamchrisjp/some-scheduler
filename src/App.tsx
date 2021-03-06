import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { ROUTES } from './utils/routes';

const NoMatch = () => <div>404</div>

function App() {
  return (
    <ChakraProvider >
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.SIGNUP} component={SignUp} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
