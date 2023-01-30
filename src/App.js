import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { Suspense } from 'react';
import NotFound from "./components/Notfound"
import Header from './components/Header';

const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (  
    <div className='photo-app'>
      <Suspense 
      fallback={
      <div class="text-center">
        <div class="spinner-border" role="status">
      <span class="sr-only"></span>
      </div>
      </div>}>
        <BrowserRouter>
            <Header/>
          <Switch>
            <Redirect exact from='/' to='/photos'/>
            <Route path='/photos' component={Photo} />
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
