import { Timestamp } from "firebase/firestore";
import { addS } from "./generalUtils";

export const getDayType = (): string => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
} 
const getLastDigit = (day: number): number => {
    return Number(String(day).slice(-1));
}
export const formatMonthDay = (dayString: string): string => {
    let day = parseFloat(dayString)
    if(getLastDigit(day) === 1) {
      return day + 'st'
    }
    else if(getLastDigit(day) === 2) {
      return day + 'nd'
    }
    else if(getLastDigit(day) === 3) {
      return day + 'rd'
    }
    else {
      return day + 'th'
    }
}
export const hourToAMPM = (hourString: string): string => {
    const hour = parseFloat(hourString)
    if(hour < 12) {
      return hour + ' AM'
    }
    else if(hour === 12) {
      return '12 PM'
    }
    else if (hour === 0) {
      return '12 AM'
    }
    else {
      return (hour - 12) + ' PM' 
    }
}
export const dbDateConvert = (date: any) => {
    return date instanceof Timestamp ? convertClassicDate(date?.toDate()) : ''
}
export const convertClassicDate = (date: Date, withTime?: boolean) => {
    return date?.toLocaleDateString('en-CA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      ...(withTime && {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    })
}
export const getTimeAgo = (date: any) => {
    const seconds = Math.floor((Date.now() - date) / 1000)
      if(seconds < 1)
       return 'Just now'
      else if(seconds < 60)
        return seconds + ` second${addS(seconds)} ago`
      else if(seconds < 3600)
        return Math.floor(seconds / 60) + ` minute${addS(Math.floor(seconds / 60))} ago`
      else if(seconds < 86400)
        return Math.floor(seconds / 3600) + ` hour${addS(Math.floor(seconds / 3600))} ago`
      else if(seconds < 604800) //if less than 3 days
        return Math.floor(seconds / 86400) + ` day${addS(Math.floor(seconds / 86400))} ago`
      else 
        return convertClassicDate(date)
}
export const newTimestamp = () : Timestamp => {
    const date = new Date()
    return Timestamp.fromDate(date)
}
export const getTimeofDay = () => {
  let hour = new Date().getHours()
  // [0, 12[ morning
  //[12, 18]
  //]18, 0[ 
  if(hour < 12) {
    return 'Morning'
  }
  else if (hour < 18) {
    return 'Afternoon'
  }
  else {
    return 'Evening'
  }
}