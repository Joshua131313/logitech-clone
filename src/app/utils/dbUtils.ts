import { TNotificationType } from "app/types/dbTypes/dbTypes"

export const handleNotiType = (type: TNotificationType, id: string) : {icon: string, link: string} => {
    if(type === 'welcome') {
      return {   
        icon: 'wreath',
        link: `/notifications?get=${id}`
      }
    }
    else {
      return {
        icon: '',
        link: ``
      }
    }
    
  }