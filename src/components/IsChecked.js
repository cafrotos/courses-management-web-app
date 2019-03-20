import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

class IsChecked extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }

  }

  static getDerivedStateFromProps(props, state) {
    const { id } = props;
    let isSelect = props.selectItem.find(item => item === id) ? true : false;
    if (isSelect) {
      return {
        checked: true,
      }
    }
    return {
      checked: false
    };
  }

  render() {
    return (
      <Icon
        style={{ fontSize: 18, color: 'green', position: 'absolute', left: -10, top: 13}}
        key={this.props.id}
        type={`${this.state.checked ? 'check' : ''}`}
      />
    )
  }
}

IsChecked.propTypes = {
  id: PropTypes.number.isRequired,
  selectItem: PropTypes.array,
}

export default IsChecked;

