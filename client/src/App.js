import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Web3ReactProvider} from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import Home from "./pages/home/Home"
import Faq from "./pages/faq/Faq"
import Profile from "./pages/profile/Profile"
import Error from "./pages/error/Error"
import LoadingSpinner from './components/misc/LoadingSpinner/LoadingSpinner'



function App() {
  function getLibrary(provider){
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/faq" exact>
              <Faq />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;