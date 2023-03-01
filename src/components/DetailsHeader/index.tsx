import styles from "./styles.module.scss";
import greenLogo from "../../../public/assets/greenLogo.png";
import iconLogo from "../../../public/assets/logo_icon.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { ReturnButton } from "../../design/ReturnButton";
import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import Link from "next/link";
import { UIContext } from "../../context/uiContext";

export function DetailsHeader() {
  const { startLoading } = useContext(UIContext);
  const { toggleDrawer } = useContext(SystemContext);

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.returnButtonWrapper}>
        <ReturnButton />
      </div>
      <Link href="/" passHref>
        <a className={styles.logoWrapper} onClick={startLoading}>
          <Image width={48} height={48} src={iconLogo} alt="" />
        </a>
      </Link>
      <Link href="/" passHref>
        <a className={styles.fullLogoWrapper}>
          <Image
            width={129}
            height={48}
            src={greenLogo}
            alt=""
            layout="responsive"
          />
        </a>
      </Link>

      <div className={styles.buttonsContainer}>
        <a
          aria-label="Contato pelo WhatsApp"
          href="https://wa.me/5519971568585"
        >
          <IconButtonPrimary icon={<TbBrandWhatsapp size="1.8rem" />} />
        </a>
        <div onClick={toggleDrawer}>
          <IconButtonPrimary icon={<BiMenuAltRight size="1.8rem" />} />
        </div>
      </div>
    </header>
  );
}
