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

    it('displays menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menu-item')).toBe(true);
    })

    it('Notifications are not displayed when display drawer is false',
        () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.notifications')).toBe(false);
    });

    it('dispalys menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.menu-item')).toBe(true);
    });

    it('dispalys notificatoins when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.notificatons')).toBe(true); 
    });
    
    

});
