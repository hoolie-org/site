import React, {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import Icon from "../../components/Icon";
import Select from "../../components/Select/";
import {createNotification} from "../../helpers/notifications";
import NotificationModel from "../../models/Notification";

export default function NotificationsPage() {
  const [notification, setNotification] = useState<
    Omit<NotificationModel, "id" | "expireDate">
  >({
    title: "",
    icon: "info-lined",
    contents: ""
  });

  // Send notification function
  function sendNotification() {
    createNotification(notification);
  }

  // Render
  return (
    <div className="NotificationsPage">
      <h1>Send notification</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          marginTop: 20
        }}
      >
        <div className="field-wrapper">
          <div className="field-wrapper">
            <div className="label">Notification title</div>
            <input
              type="text"
              placeholder="Notification title..."
              value={notification.title}
              onChange={({target: {value}}) =>
                setNotification({...notification, title: value})
              }
            />
          </div>

          <div className="field-wrapper">
            <div className="label">Notification icon</div>

            <Select
              options={[
                "info-lined",
                "error-lined",
                "check-mark-circle-lined",
                ""
              ].map((icon) => ({
                value: icon,
                element: (
                  <button className="is-zeroed">
                    {icon ? <Icon icon={icon} /> : null}
                    <span>{icon || "None"}</span>
                  </button>
                )
              }))}
              value={notification.icon as string}
              onTriggered={(icon) => setNotification({...notification, icon})}
            />
          </div>
        </div>

        <div className="field-wrapper">
          <div className="label">Notification contents</div>

          <TextareaAutosize
            placeholder="Notification contents..."
            minRows={3}
            value={notification.contents}
            onChange={({target: {value}}) =>
              setNotification({...notification, contents: value})
            }
          />
        </div>

        <hr />

        <div className="field-wrapper">
          <button
            className="_auto-width"
            onClick={() => sendNotification()}
          >
            Send notification
          </button>
        </div>
      </form>
    </div>
  );
}
