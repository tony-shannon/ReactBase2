// in src/App.js
import React from 'react';
//-import { Admin } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
//import jsonServerProvider from './JSONProviderC.js';
import jsonServerProvider from './components/JSON_fromTS/index.js';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
);

export default App;