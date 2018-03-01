import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUiDimensions, setClientSideAsReady } from '../../redux/actions/uiActions';
import { getWindowSize } from '../../utils/domUtil';
import getOptimizedResize from '../../utils/optimizedResize';

class CoreLayout extends Component {
	constructor(props) {
		super(props);

		this.optimizedResize = getOptimizedResize();
	}
	componentDidMount() {
		const { setWindowSize } = this.props;
		const resizer = () => setWindowSize(getWindowSize());
		this.optimizedResize.add(resizer);
		setWindowSize(getWindowSize());
		setTimeout(this.props.setClientSideAsReady, 10);
	}
	render() {
		return this.props.children;
	}
}

CoreLayout.defaultProps = {
	setWindowSize: () => ({ windowWidth: 0, windowHeight: 0 }),
	setClientSideAsReady: () => {},
};

CoreLayout.propTypes = {
	setWindowSize: PropTypes.func,
	setClientSideAsReady: PropTypes.func,
	children: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => ({
	setWindowSize: (dimensions) => dispatch(setUiDimensions(dimensions)),
	setClientSideAsReady: () => dispatch(setClientSideAsReady()),
});
export default connect(null, mapDispatchToProps)(CoreLayout);

