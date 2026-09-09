import { useState } from 'react'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('anthonio.andrisolo@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('send')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-obsidian py-24 md:py-32 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/30 to-transparent" />

      <div className="section-frame max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-5">
              06 — Parlons data, parlons web, parlons humain
            </p>
            <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-cream">
              Un projet en tête ?<br />
              <em className="italic gradient-copper">Échangeons.</em>
            </h2>
            <p className="mt-6 max-w-[380px] text-[13px] leading-[1.8] text-muted-on-dark">
              Une idée, un besoin d'analyse ou une interface à construire ? Écrivez-moi, je vous
              répondrai rapidement.
            </p>

            {/* Contact details */}
            <div className="mt-10 border-t border-line-dark pt-6 flex flex-col gap-3 text-[12px]">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:anthonio.andrisolo@gmail.com"
                  className="magnetic-link text-copper font-medium"
                >
                  anthonio.andrisolo@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copier l'adresse email"
                  title="Copier l'adresse email"
                  className="grid h-8 w-8 place-items-center border border-line-dark text-muted-on-dark hover:border-copper hover:text-copper transition-colors"
                >
                  {emailCopied ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <rect x="9" y="9" width="11" height="11" rx="1" />
                      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
                    </svg>
                  )}
                </button>
              </div>
              <span className="text-muted-on-dark">
                +261 34 85 130 09 · +261 32 78 492 75
              </span>
              <span className="text-muted-on-dark">
                Antananarivo, Madagascar 101
              </span>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/in/noël-anthonio-a-180b431b7"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 grid place-items-center border border-line-dark text-cream hover:bg-copper hover:text-ink hover:border-copper transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="https://github.com/noel-anthonio"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 grid place-items-center border border-line-dark text-cream hover:bg-copper hover:text-ink hover:border-copper transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>
              <a
                href="https://wa.me/261348513009"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 grid place-items-center border border-line-dark text-cream hover:bg-copper hover:text-ink hover:border-copper transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.45 1.34 4.95L2 22l5.16-1.35A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.5c-1.66 0-3.28-.45-4.7-1.3l-.34-.2-3.06.8.82-2.98-.22-.35A8.18 8.18 0 0 1 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            className="reveal reveal-delay-1 bg-surface p-8 md:p-10"
            id="contactForm"
            action="https://formspree.io/f/meoklarp"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-7">
              <label
                htmlFor="name"
                className="block text-[10px] uppercase tracking-[0.1em] text-muted-on-dark mb-2"
              >
                Votre nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Noël Anthonio"
                required
                className="block w-full border-0 border-b border-line-dark bg-transparent text-cream py-3 outline-none focus:border-copper transition-colors text-[14px] placeholder:text-muted-on-dark"
              />
            </div>

            <div className="mb-7">
              <label
                htmlFor="email"
                className="block text-[10px] uppercase tracking-[0.1em] text-muted-on-dark mb-2"
              >
                Votre email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                placeholder="vous@exemple.com"
                required
                className="block w-full border-0 border-b border-line-dark bg-transparent text-cream py-3 outline-none focus:border-copper transition-colors text-[14px] placeholder:text-muted-on-dark"
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-[10px] uppercase tracking-[0.1em] text-muted-on-dark mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Parlez-moi de votre projet..."
                required
                className="block w-full border-0 border-b border-line-dark bg-transparent text-cream py-3 outline-none focus:border-copper transition-colors text-[14px] placeholder:text-muted-on-dark resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-copper text-obsidian py-4 text-[12px] font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-copper-glow transition-all duration-300 disabled:opacity-60"
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              {status !== 'sending' && <span>↗</span>}
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-[12px] text-copper" role="status">
                Merci, votre message a bien été envoyé.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-[12px] text-[#f39c8d]" role="status">
                Une erreur est survenue. Vous pouvez aussi m'écrire directement par email.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}