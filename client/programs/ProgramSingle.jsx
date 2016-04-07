import React, {Component} from 'react';

export default class ProgramSingle extends Component {
  render() {
    return (
      <li>{this.props.program.program}
          {this.props.program.complete.toString()}
      </li>
    )
  }
}
