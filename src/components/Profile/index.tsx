import Image from 'next/image'
import NotificationIcon from '@public/notification.svg'
import ProfileIcon from '@public/profile.svg'
import {Menu} from '@components/Menu'

export const Profile = () => {
  return (
    <div className="hidden md:flex md:gap-x-12 md:items-center">
      <Menu />
      <Image src={NotificationIcon} alt="Notificación" />
      <Image src={ProfileIcon} alt="Avatar" />
    </div>
  )
}
