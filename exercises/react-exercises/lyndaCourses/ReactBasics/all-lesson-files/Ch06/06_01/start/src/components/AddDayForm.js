import PropTypes from 'prop-types';
import { Component } from 'react';

const tahoeResorts = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch",
	"Heavenly",
	"Homewood",
	"Kirkwood",
	"Mt. Rose",
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]

class AutoComplete extends Component {

	get value(){
		return this.refs.inputResort.value
	}

	set value(inputValue) {
		this.refs.inputResort.value = inputValue
	}

	render(){
		return (
			<div>
				<input ref="inputResort"
					   type="text"
					   list="tahoe-resorts" />
				<datalist id="tahoe-resorts">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>
					)}
				</datalist>
			</div>
		)
	}
}




export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {
	let _resort, _date, _powder, _backcountry;

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			resort: _resort.value,
			date: _date.value,
			powder: _powder.checked,
			backcountry: _backcountry.checked
		})
		_resort.value = '';
		_date.value = '';
		_powder.checked = false;
		_backcountry.checked = false;
	}

	return (
		<form className="add-day-form" onSubmit={submit}>
			<label htmlFor="resort">Resort Name</label>
			<AutoComplete
				   options={tahoeResorts}
				   ref={input => _resort = input}/>

			<label htmlFor="date">Date</label>
			<input type="date"
				   id="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input type="checkbox"
					   id="powder"
					   defaultChecked={powder}
					   ref={input => _powder = input}/>
				<label htmlFor="powder">Powder Day</label>
			</div>
			<div>
				<input type="checkbox"
					   id="backcountry"
					   defaultChecked={backcountry}
					   ref={input => _backcountry = input}/>
				<label htmlFor="backcountry">Backcountry Day</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}


AddDayForm.defaultProps = {
	resort: "Kirkwood",
	date: "2017-02-12",
	powder: true,
	backcountry: false
}

AddDayForm.propTypes = {
	resort: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	powder: PropTypes.bool.isRequired,
	backcountry: PropTypes.bool.isRequired
}
