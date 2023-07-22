import { ButtonBrand } from "../../design/ButtonBrand"
import { AnchorHTMLAttributes, useEffect, useState } from "react"

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ContactUsButton = ({ ...props }: IProps) => {
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
        {...props}
      >
        <ButtonBrand size='large' text="Enviar mensagem" />
    </a>
  )
}