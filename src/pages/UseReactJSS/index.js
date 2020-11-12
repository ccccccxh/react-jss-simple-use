import React from 'react';
import StyledComponent from './StyleComponent';

const styles = {
  div: props => ({
    color: '#ffc300',
    ...props.divStyle,
  })
}

class ClassComponent extends React.Component {

  render() {
    return (
      <StyledComponent styleMap={styles}>
        {
          (useStyles) => {
            const styles = useStyles(this.props);
            return (
            <div className={styles.div}>
                USE REACT-JSS（version: v10.4.0） IN CLASS COMPONENT
            </div>
          )}
        }
      </StyledComponent>
    )
  }
}

export default ClassComponent;