import { shallow } from 'enzyme';
import Notifications from "./Notifications.js";
import NotificationItem from './NotificationItem.js';


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
    
    it('renders correctly if you pass an empty array or bad input', () => {
        let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.exists()).toBe(true);

        wrapper = shallow(<Notifications displayDrawer={true} listNotifications="[]" />);
        expect(wrapper.extsts()).toBe(true);
    })

    it('renders the correct amount of notifications', () => {
        const listNotifications = [
            {
              id: 1,
              type: "default",
              value: "New course available",
              html: "",
            },
            {
              id: 2,
              type: "urgent",
              value: "New resume available",
              html: "",
            },
            {
              id: 3,
              type: "urgent",
              value: "",
              html: { __html: getLatestNotification() },
            }
          ]
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    })

    t('renders the right message if you pass an empty array', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        const tableRow = wrapper.find('td');
        expect(tableRow.text()).toBe('No new notifications for now');
    })

});
