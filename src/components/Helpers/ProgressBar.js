import React from 'react';

class ProgressBar extends React.Component {
	render() {
		var type = this.props.type;

		if (type === 'skills') { //skills
			var data = this.props.data,
			name = data.name,
			class_name = data.class_name,
			level = data.level;

			return (
				<div className="progress">
	        <div className="progress-bar { class_name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
	          { name }
	        </div>
	      </div>
			)
		} else { //languages
			var data = this.props.data,
				name = data.name,
				proficiency = data.proficiency,
				level = data.level;

			return (
				<div className="progress">
	        <div className="progress-bar { name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
	          { name } ({ proficiency })
	        </div>
	      </div>
			)
		}
	}
}

ProgressBar.defaultProps = {
	type: "languages",
  data: {}
};

ProgressBar.propTypes = {
	type: React.PropTypes.string.isRequired,
	data: React.PropTypes.object.isRequired
}

export default ProgressBar;