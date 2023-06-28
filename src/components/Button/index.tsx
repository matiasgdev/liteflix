import Play from '@public/icons/play.svg'
import Plus from '@public/icons/plus.svg'

interface Props {
  label: string
  icon?: keyof typeof icons
}

const icons = {
  play: Play,
  plus: Plus,
}

export const Button: React.FC<Props> = ({label, icon = 'play'}) => {
  const Icon = icons[icon]
  return (
    <button className="flex items-center text-center gap-x-4 py-4 px-16 border border-white border-solid min-w-[248px]">
      <Icon className="scale-110" />
      <span className="text-white tracking-widest mt-1">{label}</span>
    </button>
  )
}
