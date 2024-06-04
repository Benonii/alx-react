import notifications from '../../../../notifications.json';
import getAllNotificationsByUser from "./notifications";
import { notification, user, message } from './notifications';
import { normalize } from 'normalizr';


describe('getAllNotificationsByUser', () => {
  it('returns the right data when a valid id is entered', () => {
      const returnedData = getAllNotificationsByUser('5debd764a7c57c7839d722e9')
      const expectedData = [
          {
            guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
            isRead: true,
            type: "urgent",
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          },
          {
            guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
            isRead: false,
            type: "urgent",
            value:
              "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
          }
        ]
      
      expect(returnedData).toEqual(expectedData);
  });
  it('returns the right result array when the data is mormalized', () => {
    const normalizedData = normalize(notifications, [notification]);
    const expectedResult = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b",
    ]
    expect(normalizedData.result).toEqual(expectedResult);
  });
  it('has the correct users entity', () => {
    const userId = '5debd76480edafc8af244228';
    const normalizedData = normalize(notifications, [user]);
    const userEntity = normalizedData.entities.users[userId].author;
    const expectedUser = {
        name: { first: 'Poole', last: 'Sanders' },
        email: 'poole.sanders@holberton.nz',
        id: "5debd764a7c57c7839d722e9",
        picture: 'http://placehold.it/32x32',
        age: 25,
      };
    expect(userEntity).toEqual(expectedUser);
  });
  it('has the correct messages entity when tit is normalized', () => {
    const messageId = "5debd76480edafc8af244228";
    const normalizedData = normalize(notifications, [message])
    const messageEntity = normalizedData.entities.messages[messageId].context;
    const expectedMessage = {
      guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
      isRead: true,
      type: 'urgent',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    }
    expect(messageEntity).toEqual(expectedMessage);
  });
  it('has the correct notification entity', () => {
    const notificationId = "5debd7646ef31e0861ec1cab";
    const normalizedData = normalize(notifications, [notification]);
    const notificationEntity = normalizedData.entities.notifications[notificationId];

    const expectedResult = {
      id: '5debd7646ef31e0861ec1cab',
      author: [
        '5debd7645c8d811b8c6a235d',
        undefined,
        'valentine.juarez@holberton.nz',
        'http://placehold.it/32x32',
        25
      ],
      context: [
        '1d3918d0-67e6-44a4-9031-72d7750234de',
        true,
        'default',
        'Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing'
      ]
    };
    expect(notificationEntity).toEqual(expectedResult);
  });
});
