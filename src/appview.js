var React, {Component} = require("react");
var connect = require("react-redux").connect;
var actions = require("./actions.js");

class PhoneForm extends Component {
	constructor(props) {
		super(props);
	}

	onClick() {
		if (this.refs.phoneInput.value !== "") {
			var itemText = this.refs.phoneInput.value;
			this.refs.phoneInput.value = "";
			return this.props.addPhone(itemText);
		}
	}

	render() {
		return (
			<div>
				<input ref="phoneInput" />
				<button onClick={this.onClick.bind(this)}>Добавить</button>
			</div>
		)
	}
}

class PhoneItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>
					<b>{this.props.text}</b><br />
					<button onClick={() => this.props.deletePhone(this.props.text)}>Удалить</button>
				</p>
			</div>
		)
	}	
}

class PhoneList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.phones.map(item =>
					<PhoneItem key={item} text={item} deletePhone={this.props.deletePhone} />
				)}
			</div>
		)		
	}	
}

class AppView extends Component {
	render() {
		return (
			<div>
				<PhoneForm addPhone={this.props.addPhone} />
				<PhoneList {...this.props} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		phones: state.get("phones")
	}
}

module.exports = connect(mapStateToProps, actions)(AppView);