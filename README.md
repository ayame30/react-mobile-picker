A branch fork from https://github.com/adcentury/react-mobile-picker#readme
to add support for `{value: 'm', label: 'Male'}` option format.

# React Scrollable Picker forked from React Mobile Picker

 [![npm](https://img.shields.io/npm/dm/react-scrollable-picker.svg)](https://www.npmjs.com/package/react-scrollable-picker) [![GitHub license](https://img.shields.io/github/license/ayame30/react-scrollable-picker.svg)](https://github.com/ayame30/react-scrollable-picker/blob/master/LICENSE)

React Mobile Picker is a super simple component with no restriction, which means you can use it in any way you want.

![screen-capture](./examples/screen-capture.gif)

## Preview

![qr](./examples/qr.png)

Scan this Qr in you mobile.

Or visit (in mobile or mobile simulator): [http://ayame30.github.io/react-scrollable-picker](http://ayame30.github.io/react-scrollable-picker)

## Install

```
npm install react-scrollable-picker --save
```

## Usage

### ES6

```javascript
import Picker from 'react-scrollable-picker';
```

### CommonJS

```javascript
var Picker = require('react-scrollable-picker');
```

## Props

| Property name | Type | Default | Description |
| ------------- | ---- | ------- | ----------- |
| optionGroups | Object | N/A | Key-value pairs as `{name1: options1, name2: options2}`. `options` is an array of all options for this name. |
| valueGroups | Object | N/A | Selected value pairs as `{name1: value1, name2: value2}`. |
| onChange(name, value) | Function | N/A | Callback called when user pick a new value. |
| itemHeight | Number | 36 | Height of each item (that is each option). In `px`. |
| height | Number | 216 | Height of the picker. In `px`. |

## Getting Started

By design, React Mobile Picker is a [Controlled Component](https://facebook.github.io/react/docs/forms.html#controlled-components), which means the selected value of the rendered element will always reflect the `valueGroups`. Every time you want to change the selected item, just modify `valueGroups` values.

Here is an example of how to integrate React Mobile Picker:

```javascript
import React, {Component} from 'react';
import Picker from 'react-scrollable-picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: 'Mr.',
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

  // Update the value in response to user picking event
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
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange} />
    );
  }
}
```

## More Examples

```
git clone this repo
npm install
npm start
point your browser to http://localhost:8080
```

## License

MIT.
