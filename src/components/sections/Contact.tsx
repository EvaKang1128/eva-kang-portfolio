import { AtSign, Copy, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'
import { Container } from '../layout/Container'
import { Reveal } from '../ui/Reveal'
import { Toast } from '../ui/Toast'

export function Contact() {
  const [toastMessage, setToastMessage] = useState('')
  const timerRef = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    },
    [],
  )

  const showToast = (message: string) => {
    setToastMessage(message)
    if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setToastMessage(''), 2200)
  }

  const fallbackCopy = (value: string): boolean => {
    const textarea = document.createElement('textarea')
    textarea.value = value
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand('copy')
    document.body.removeChild(textarea)
    return copied
  }

  const copyValue = async (value: string, label: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value)
      } else if (!fallbackCopy(value)) {
        throw new Error('Copy command was unavailable')
      }
      showToast(`${label}已复制`)
    } catch {
      showToast(`复制失败，请手动复制${label}`)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-sky-light py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-lg bg-primary px-6 py-12 text-white shadow-lift sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute right-0 top-0 h-full w-2 bg-cream" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase text-cream">Let's connect</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">保持联系</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              如果你正在寻找兼具数据分析能力、业务理解和项目推进经验的商业分析、数据产品或数据治理候选人，欢迎通过邮箱或小红书与我联系。
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 max-w-full items-center gap-3 break-all rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                <Mail className="h-5 w-5 shrink-0 text-cream" aria-hidden="true" />
                {profile.email}
              </a>
              <div className="inline-flex min-h-11 max-w-full items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white sm:text-base">
                <AtSign className="h-5 w-5 shrink-0 text-cream" aria-hidden="true" />
                <span>小红书｜{profile.xiaohongshu}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-[#3D3688] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none"
                onClick={() => copyValue(profile.email, '邮箱')}
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                一键复制邮箱
              </button>
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none"
                onClick={() => copyValue(profile.xiaohongshu, '小红书号')}
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                一键复制小红书号
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
      <Toast visible={Boolean(toastMessage)} message={toastMessage || '已复制'} />
    </section>
  )
}
