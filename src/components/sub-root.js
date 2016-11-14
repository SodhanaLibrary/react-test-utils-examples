import React from 'react';

class SubRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="subRootClass">
         sub root element
      </div>
    );
  }

}

SubRoot.defaultProps = {
  myProp:"my prop value"
}

SubRoot.propTypes = {
  myProp:React.PropTypes.string
}

export default SubRoot;
