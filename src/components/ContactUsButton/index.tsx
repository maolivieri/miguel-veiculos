import { TbBrandWhatsapp } from "react-icons/tb"
import { ButtonBrand } from "../../design/ButtonBrand"
import { IconButtonPrimary } from "../../design/IconButtonPrimary"
import styles from './styles.module.scss'
import { useEffect, useState } from "react"

// const IS_SERVER = typeof window === "undefined";
// function getProtocol() {
//   const isProd = process.env.VERCEL_ENV === "production";
//   if (isProd) return "https://";
//   return "http://";
// }
// function getAbsoluteUrl() {
//   //get absolute url in client/browser
//   if (!IS_SERVER) {
//     return location.origin;
//   }
//   //get absolute url in server.
//   const protocol = getProtocol();
//   if (process.env.VERCEL_URL) {
//     return `${protocol}${process.env.VERCEL_URL}`;
//   }
// }

export const ContactUsButton = () => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window?.location?.href)
    }
  }, [])

  return (              
      <a
        aria-label="Contato pelo WhatsApp"
        target="_blank"
        href={`https://wa.me/5519974040531?text=${encodeURIComponent(`Olá, tenho interesse nesse veículo: ${currentUrl}`)}`} 
        rel="noreferrer"
      >
        <div className={styles.largeScreen}>
          <ButtonBrand size='large' text="Enviar mensagem" />
        </div>
        <div className={styles.smallScreen}>
          <IconButtonPrimary showText icon={<TbBrandWhatsapp size="1.6rem" />} text="Enviar mensagem" />
        </div>
    </a>
  )
}