import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }: Props) {
  const center = align === 'center'
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl md:text-5xl md:leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{text}</p>
        </Reveal>
      )}
    </div>
  )
}
