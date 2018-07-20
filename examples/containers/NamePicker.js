import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Picker from 'react-mobile-picker';

export default class NamePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: 'mr',
        firstName: 'Micheal',
        secondName: 'Jordan'
      }, 
      optionGroups: {
        title: [
          { value: 'mr', label: 'Mr.' },
          { value: 'ms', label: 'Ms.' },
          { value: 'dr', label: 'Dr.' },
        ],
        firstName: [
          { value: 'John', label: 'John' },
          { value: 'Micheal', label: 'Micheal' },
          { value: 'Elizabeth', label: 'Elizabeth' },
        ],
        secondName: [
          { value: 'Lennon', label: 'Lennon' },
          { value: 'Jackson', label: 'Jackson' },
          { value: 'Jordan', label: 'Jordan' },
          { value: 'Legend', label: 'Legend' },
          { value: 'Taylor', label: 'Taylor' }
        ],
      },
    };
  }

  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
  };

  render() {
    const {optionGroups, valueGroups} = this.state;

    return (
      <div className="example-container">
        <div className="weui_cells_title">1. As an inline component</div>
        <div className="weui_cells">
          <div className="weui_cell">
            <div className="weui_cell_bd weui_cell_primary">Hi, {valueGroups.title} {valueGroups.firstName} {valueGroups.secondName}</div>
          </div>
        </div>
        <div className="picker-inline-container">
          <Picker
            optionGroups={optionGroups}
            valueGroups={valueGroups}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
