import NotificationCard from "app/components/notifications/NotificationCard/NotificationCard";
import DataDropdown from "app/components/ui/Dropdown/DataDropdown";
import DropdownTemplate from "app/components/ui/Dropdown/DropdownTemplate";
import useDocsCount from "app/hooks/db/useDocsCount";
import useNotifications from "app/hooks/db/useNotifications";
import { INotification } from "app/types/dbTypes/dbInterfaces";
import React from "react";

interface Props {
    id: string,
}
interface NotificationParam<FieldName extends keyof INotification> {
  collectionRef: "notifications";
  filter: {
    filterKey: FieldName;
    operator: "==";
    filterValue: INotification[FieldName];
  };
}
function createParam<FieldName extends keyof INotification>(
  param: NotificationParam<FieldName>
) {
  return param;
}

const NotificationsDropdown = (props: Props) => {
  const {id} = props 
  const count = useDocsCount(createParam({
    collectionRef: 'notifications',
    filter: {
      filterKey: 'seen',
      operator: '==',
      filterValue: false
    }
  }))
  const notifications = useNotifications({})
  const notificationsRender = notifications.map((notification, i)=> {
    return (
      <NotificationCard notification={notification} key={i}/>
    )
  })

  return (
    <DropdownTemplate
      position="right"
      id="notification-dropdown"
      content={
        <DataDropdown 
            title="Notifications" 
            to="notifications"
        >
          {notificationsRender}
        </DataDropdown>
      }
    >
      {count ? <span className="badge-icon">{count}</span> : ''}
      <i className="fal fa-bell app-icon"></i>
    </DropdownTemplate>
  );
};

export default NotificationsDropdown;
