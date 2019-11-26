// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, ShowGuesser } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import jsonServerProvider from './components/JSONDP_fromTS.js';
import UserTableReactHooks from "./components/UserTableReactHooks";


//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataProvider = jsonServerProvider('https://8t4vl.sse.codesandbox.io');
//const dataProvider = jsonServerProvider('https://5000-d0316dbb-8407-4a0b-a77d-da608a2545f3.ws-eu01.gitpod.io');
const dataProvider = jsonServerProvider('https://5000-fd3a8674-79e0-450e-b2cb-a3692ba982a9.ws-eu01.gitpod.io');
const App = () => (
    <div>
    <Admin 
        dataProvider={dataProvider}
        
    > 
        <Resource name="users" list={ListGuesser} />
         <Resource name="posts" list={ListGuesser} />  
         <Resource name="comments" list={ListGuesser} /> 
         <Resource name="Patients" list={ListGuesser} /> 
         <Resource name="Schemas" list={ListGuesser} /> 
        <Resource name="Templates" list={ListGuesser} /> 
         <Resource name="Transforms" list={ListGuesser} /> 
    </Admin>
    <UserTableReactHooks />
    </div>
);

export default App;
///dashboard= {Dashboard}
/// <Resource name="users" list={ListGuesser} />