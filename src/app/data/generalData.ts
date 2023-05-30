import { IAddDeviceOption, IDropdownOption, ILinkWithSublinks } from "app/types/uiTypes/uiInterfaces";

export const sidebarLinks : ILinkWithSublinks[] = [
    {
        text: 'Home',
        icon: 'home',
        link: '/',
    },
    {
        text: 'Posts',
        icon: 'newspaper',
        link: 'posts',
    },
    {
        text: 'Calendar',
        icon: 'calendar-alt',
        link: 'calendar',
    },
    {
        text: 'Projects',
        icon: 'project-diagram',
        link: 'projects',
    },
    {
        text: 'Messages',
        icon: 'comments',
        link: 'messages',
    },
    {  
        icon: 'video',
        text: 'Meetings',
        link: 'meetings'
    },
    {  
        icon: 'calendar-check',
        text: 'Events',
        link: 'events'
    },
    {  
        icon: 'book',
        text: 'Resources',
        link: 'resources'
    },
    {
        text: 'Settings',
        icon: 'cog',
        link: 'settings',
    },
]
export const createOptions: IDropdownOption[] = [ 
    {
        text: 'Post',
        icon: 'newspaper',
        link: '/newspaper/create'
    },
    {
        text: 'Project',
        icon: 'project-diagram',
        link: '/project/create'
    },
    {
        text: "Message",
        icon: 'comments',
        link: '/messages/create'
    },
    {
        text: 'Meeting',
        icon: 'video',
        link: '/meetings/create'
    }
]
export const navUserDropdown: IDropdownOption[] = [

    {
      text: 'My Account',
      icon: 'user',
      link: 'my-account' ,
       
    },
    {
      text: 'Settings',
      icon: 'cog',
      link: 'settings'  
    },
    {
        logout: true,
    },
    {
        title: true
    },
]
export const addDeviceOptions: IAddDeviceOption[] = [
    {
        img: require('app/assets/logi-bolt.png'),
        title: 'Logi Bolt receiver',
        subTitle: 'No receiver connected'
    },
    {
        img: require('app/assets/logi-unifying.png'),
        title: 'Logi Unifying receiver',
        subTitle: 'No receiver connected'
    },
    {
        img: require('app/assets/logi-unifying.png'),
        title: 'Logi USB receiver',
        subTitle: 'No receiver connected'
    },
    {
        img: require('app/assets/bluetooth.png'),
        title: 'Bluetooth',
        subTitle: ''
    },
]