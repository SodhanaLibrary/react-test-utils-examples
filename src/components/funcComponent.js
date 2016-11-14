import React from 'react';

class FuncComponent  extends React.Component {

	constructor(props) {
		super(props);
    this.dblClickEventFunc = this.dblClickEventFunc.bind(this);
	}

	dblClickEventFunc() {
		this.props.dblClickFunc('this is some sample arg value');
	}

	render () {
		return <div>
      <div id="clickEventDiv" onClick={this.props.clickFunc}>
      </div>
      <div id="dblClickEventDiv" onDoubleClick={this.dblClickEventFunc}>
      </div>
    </div>;
	}

}

FuncComponent.propTypes = {
  clickFunc:React.PropTypes.func,
  dblClickFunc:React.PropTypes.func
}

FuncComponent.defaultProps = {

}

export default FuncComponent;
