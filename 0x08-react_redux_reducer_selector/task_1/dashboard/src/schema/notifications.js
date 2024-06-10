import { normalize, schema } from 'normalizr';
import notifications from '../../../../notifications.json'


const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
    idAttributes: 'guid',

});
const notification = new schema.Entity("notifications", {
    author: [user],
    context: [message]
});

export default function getAllNotificationsByUser(userId) {
    const normalizedNotifications = normalize(notifications, [user])
    const userEntity = normalizedNotifications.entities.users[userId]

    return userEntity.context;
}

export { user, message, notification }