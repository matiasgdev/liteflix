import Play from '@public/icons/play.svg'
import Plus from '@public/icons/plus.svg'
import {isValidElement, DetailedHTMLProps, ButtonHTMLAttributes} from 'react'

type Props = {
  label: string
  icon?: keyof typeof icons
  className?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const icons = {
  play: Play,
  plus: Plus,
}

export const Button: React.FC<Props> = ({
  label,
  icon = '',
  className = '',
  ...props
}) => {
  const Icon = icons[icon as keyof typeof icons]
  return (
    <button
      {...props}
      className={`flex items-center text-center gap-x-4 py-4 px-16  min-w-[248px] max-h-[56px] ${className}`}
    >
      {Icon ? <Icon className="scale-110" /> : null}
      <span className="text-white tracking-widest mt-1 text-lg">{label}</span>
    </button>
  )
}
