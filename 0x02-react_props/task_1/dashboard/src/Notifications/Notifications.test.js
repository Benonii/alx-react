import { shallow } from 'enzyme';
import Notifications from "./Notifications.js";


describe('', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('renders the text "Here is the list..."', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains('Here is the list of notifications')).toBe(true);
    });

});