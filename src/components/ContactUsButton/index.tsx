import { ButtonBrand } from "../../design/ButtonBrand"
import { useEffect, useState } from "react"

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
        <ButtonBrand size='small' text="Enviar mensagem" />
    </a>
  )
}