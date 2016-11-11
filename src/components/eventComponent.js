import React from 'react';

class EventComponent  extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return <div>
      <div id="clickEventDiv" onClick={this.props.clickEventFunc}>
      </div>
      <div id="dblClickEventDiv" onClick={this.props.dblClickEventFunc}>
      </div>
      <div id="selectEventDiv" onClick={this.props.selectEventFunc}>
      </div>
      <div id="mouseOverEventDiv" onClick={this.props.mouseOverEventFunc}>
      </div>
      <div id="changeEventDiv" onClick={this.props.changeEventFunc}>
      </div>
    </div>;
	}

}

EventComponent.propTypes = {
   clickEventFunc:React.PropTypes.func,
   dblClickEventFunc:React.PropTypes.func,
   selectEventFunc:React.PropTypes.func,
   mouseOverEventFunc:React.PropTypes.func,
   changeEventFunc:React.PropTypes.func
}

EventComponent.defaultProps = {

}

export default EventComponent;
