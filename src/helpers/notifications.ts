import {DateTime} from "luxon";
import NotificationModel from "../models/Notification";
import * as notificationsStore from "../store/reducers/notifications";
import {store} from "../store/store";
import {generateHex} from "./misc";

export function createNotification(
  notification: Partial<NotificationModel>
): NotificationModel["id"] {
  const {notifications} = notificationsStore.state(store.getState());
  const $notification: NotificationModel = {
    id: generateHex(8),
    title: notification.title ?? "",
    contents: notification.contents ?? "",
    expireDate:
      notification.expireDate ?? DateTime.now().plus({second: 5}).toISO(),
    icon: notification.icon
  };

  store.dispatch(
    notificationsStore.actions.setNotifications([
      ...notifications,
      $notification
    ])
  );

  return $notification.id;
}

export function deleteNotification(id: NotificationModel["id"]) {
  const {notifications} = notificationsStore.state(store.getState());
  store.dispatch(
    notificationsStore.actions.setNotifications(
      notifications.filter((notification) => notification.id !== id)
    )
  );
}

export function clearExpiredNotifications() {
  const {notifications} = notificationsStore.state(store.getState());

  const expiredNotification = notifications.find(
    (notification) =>
      DateTime.now() >= DateTime.fromISO(notification.expireDate)
  );

  if(expiredNotification) {
    store.dispatch(
      notificationsStore.actions.setNotifications(
        notifications.filter(
          (notification) =>
            DateTime.now() < DateTime.fromISO(notification.expireDate)
        )
      )
    );
  }
}
