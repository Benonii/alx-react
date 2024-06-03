import notifications from '../../../../notifications.json'

export default function getAllNotificationsByUser(userId) {
    const context = []
    for (const notification of notifications) {
        if (notification.author.id === userId) {
            context.push(notification.context);
        }
    }

    return context;
}