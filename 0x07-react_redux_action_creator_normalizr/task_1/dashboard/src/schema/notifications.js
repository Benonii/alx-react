import { normalizr, schema } from 'normalizr';
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
    const context = []
    for (const notificationElement of notifications) {
        if (notificationElement.author.id === userId) {
            context.push(notificationElement.context);
        }
    }

    return context;
}

export { user, message, notification }