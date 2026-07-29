import { Copy, Mail } from 'lucide-react'
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

  const fallbackCopy = (): boolean => {
    const textarea = document.createElement('textarea')
    textarea.value = profile.email
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand('copy')
    document.body.removeChild(textarea)
    return copied
  }

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(profile.email)
      } else if (!fallbackCopy()) {
        throw new Error('Copy command was unavailable')
      }
      showToast('邮箱已复制')
    } catch {
      showToast('复制失败，请手动复制邮箱')
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
              如果你正在寻找兼具数据分析能力、业务理解和项目推进经验的商业分析、数据产品或数据治理候选人，欢迎通过邮箱与我联系。
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex min-h-11 max-w-full items-center gap-3 break-all rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            >
              <Mail className="h-5 w-5 shrink-0 text-cream" aria-hidden="true" />
              {profile.email}
            </a>

            <div className="mt-8">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-[#3D3688] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none"
                onClick={copyEmail}
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                一键复制邮箱
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
      <Toast visible={Boolean(toastMessage)} message={toastMessage || '邮箱已复制'} />
    </section>
  )
}
