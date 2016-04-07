import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ProgramsWrapper from './programs/ProgramsWrapper.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ProgramsWrapper />)
    })
  }
})
