import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ProgramsForm from './ProgramsForm.jsx'
import ProgramSingle from './ProgramSingle.jsx'

Programs = new Mongo.Collection("programs");

export default class ProgramsWrapper extends TrackerReact(React.Component) {

  programs() {
    return Programs.find().fetch();
  }

  render() {
    let prog = this.programs();

    return (
      <div>
        <h1>My Programs</h1>
          <ProgramsForm />
        <div>
          <ProgramSingle program={prog[1]} />
        </div>
      </div>
    )
  }

}
