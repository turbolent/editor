import * as React from 'react';

import { Admin, Resource, Delete } from 'admin-on-rest';
import { TestList, TestCreate, TestEdit } from './components/tests';
import TestIcon from 'material-ui/svg-icons/action/assignment-turned-in';
import postgrestClient from '@turbolent/aor-postgrest-client';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { blueGrey500, blueGrey700, deepOrange700 } from 'material-ui/styles/colors';
import createAuthClient from './authClient';
import httpClient from './httpClient';

const theme = {
    ...lightBaseTheme,
    palette: {
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        accent1Color: deepOrange700,
        pickerHeaderColor: blueGrey500
    }
};

const App = () => (
    <Admin 
        title="Editor"
        restClient={postgrestClient('/api', httpClient)}
        authClient={createAuthClient('/api')}
        theme={getMuiTheme(theme)}
    >
        <Resource
            name="tests" 
            list={TestList}
            edit={TestEdit}
            create={TestCreate}
            remove={Delete}
            icon={TestIcon}
        />
    </Admin>
);

export default App;
