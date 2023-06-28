import {Menu} from '@components/Menu'
import NotificationIcon from '@public/notification.svg'
import ProfileIcon from '@public/profile.svg'

export const Profile = () => {
  return (
    <div className="hidden md:flex md:gap-x-12 md:items-center">
      <Menu />
      <NotificationIcon />
      <ProfileIcon />
    </div>
  )
}
