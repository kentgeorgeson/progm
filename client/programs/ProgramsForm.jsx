import React, {Component} from 'react';

export default class ProgramsForm extends Component {

  addProgram(event) {
    event.preventDefault();
    var program = this.refs.program.value.trim();

    Programs.insert({
      program: program,
      complete: false,
      createdAt: new Date()
    })

    this.refs.program.value = "";
  }



  render() {

    return (
      <form className="new-program" onSubmit={this.addProgram.bind(this)}>
        <input type="text" ref="program" placeholder="Finish React Meteor Series"/>

      </form>
    )
  }
}
