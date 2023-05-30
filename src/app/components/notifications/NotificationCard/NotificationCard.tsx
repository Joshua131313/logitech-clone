import { deleteNoti, markNotiAsRead } from "app/services/notificationServices";
import { INotification } from "app/types/dbTypes/dbInterfaces";
import { getTimeAgo } from "app/utils/dateUtils";
import { handleNotiType } from "app/utils/dbUtils";
import { Link } from "react-router-dom";
import "./NotificationCard.css";
interface Props {
  notification: INotification;
  className?: string;
  showText?: boolean;
}

const NotificationCard = (props: Props) => {
  const { notification, className, showText } = props;
  let notiData = handleNotiType(notification.type, notification.notificationID);
  const handleMarkAsRead = () => {
    if (!notification.seen) {
      markNotiAsRead(notification.notificationID);
    }
  };
  const options = [
    {
        icon: 'eye',
        text: 'Mark as read',
        onClick: ()=> handleMarkAsRead()
    },
    {
      icon: "trash",
      text: "Delete notification",
      onClick: () => deleteNoti(notification.notificationID),
    },
  ];
  const optionsRender = options.map(option=> {
    return (
      <i className={`app-icon fal fa-${option.icon}`} 
        onClick={(e)=> {
          e.preventDefault()
          option.onClick()
        }
      }
      ></i>
    )
  })
  return (
    <Link
      onClick={() => handleMarkAsRead()}
      to={`/notifications`}
      className={`${className} notification-card flex-row ac sb`}
    >
      <div className="notificatopn-content flex-row ac">
        <i className={`fal fa-${notiData.icon}`}></i>
        <div className="flex-col">
          <strong>{notification.title}</strong>
          {showText && <small>{notification.text}</small>}
          <small className="time-ago">
            {getTimeAgo(notification.dateCreated.toDate())}
          </small>
        </div>
      </div>

      <div className="card-right flex-row ac jc">
        {!notification.seen && (
          <div className="notification-indicator indicator"></div>
        )}
        {showText &&
        <>
        {optionsRender}
        </> 
        }
      </div>
    </Link>
  );
};

export default NotificationCard;
