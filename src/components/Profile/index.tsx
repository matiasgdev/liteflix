'use client'
import {Menu} from '@components/Menu'
import NotificationIcon from '@public/notification.svg'
import ProfileIcon from '@public/profile.svg'

export const Profile = () => {
  return (
    <div className="flex gap-x-12 items-center animate-fade-down">
      <div className="hidden md:block">
        <Menu />
      </div>
      <div className="hidden md:block">
        <NotificationIcon />
      </div>
      <ProfileIcon />
    </div>
  )
}
