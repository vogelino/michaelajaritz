import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUiDimensions } from '../../redux/actions/uiActions';
import { getWindowSize } from '../../utils/domUtil';
import getOptimizedResize from '../../utils/optimizedResize';

export const getCoreLayout = (WrappedComponent) => {
	class CoreLayout extends Component {
		constructor(props) {
			super(props);

			this.optimizedResize = getOptimizedResize();
		}
		componentDidMount() {
			const { setWindowSize } = this.props;
			const resizer = () => {
				setWindowSize(getWindowSize());
			};
			this.optimizedResize.add(resizer);
			setWindowSize(getWindowSize());
		}
		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	CoreLayout.defaultProps = {
		setWindowSize: () => ({ windowWidth: 0, windowHeight: 0 }),
	};

	CoreLayout.propTypes = {
		setWindowSize: PropTypes.func,
	};

	return CoreLayout;
};

export default (WrappedComponent) => {
	const mapDispatchToProps = (dispatch) => ({
		setWindowSize: (dimensions) => dispatch(setUiDimensions(dimensions)),
	});
	return connect(null, mapDispatchToProps)(getCoreLayout(WrappedComponent));
};
