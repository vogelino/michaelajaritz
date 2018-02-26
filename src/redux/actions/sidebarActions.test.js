import { isFSA } from 'flux-standard-action';
import * as actions from './sidebarActions';

test('All actions should be FSA compliant', () => {
	Array.from(actions).forEach((actionCreator) => {
		const action = actionCreator('Dummy value');
		expect(isFSA(action)).toEqual();
	}, this);
});
