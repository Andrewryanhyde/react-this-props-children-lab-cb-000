import React from 'react'
import PropTypes from 'prop-types'

export default class ThemedDecorations extends React.component{
  render() {
    const childrenProp = React.Children.map(this.props.children, child => {
     return React.cloneElement(child, {
       className: this.props.theme
     });
   });
   return (
     <div>{childrenProp}</div>
   );
  }
}
