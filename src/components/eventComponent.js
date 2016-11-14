import React from 'react';

class EventComponent  extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clickClass:'',
			dblClickClass:'',
			mouseOverEventClass:'',
			inputVal:''
		}
		this.clickEventFunc = this.clickEventFunc.bind(this);
		this.dblClickEventFunc = this.dblClickEventFunc.bind(this);
		this.onChange = this.onChange.bind(this);
		this.mouseOverEventFunc = this.mouseOverEventFunc.bind(this);
	}

	clickEventFunc() {
		this.setState({
			clickClass:'click-class'
		});
	}

	dblClickEventFunc() {
		this.setState({
			dblClickClass:'dblclick-class'
		});
	}

	mouseOverEventFunc() {
		this.setState({
			mouseOverEventClass:'mouseover-class'
		});
	}

	onChange(event) {
		this.setState({
			inputVal:event.target.value
		});
	}

	render () {
		return <div>
      <div id="clickEventDiv" className={this.state.clickClass} onClick={this.clickEventFunc}>
      </div>
      <div id="dblClickEventDiv" className={this.state.dblClickClass} onDoubleClick={this.dblClickEventFunc}>
      </div>
      <div id="mouseOverEventDiv" className={this.state.mouseOverEventClass} onMouseOver={this.mouseOverEventFunc}>
      </div>
			<input id="inputElm" value={this.state.inputVal} onChange={this.onChange}></input>
    </div>;
	}

}

EventComponent.propTypes = {

}

EventComponent.defaultProps = {

}

export default EventComponent;
