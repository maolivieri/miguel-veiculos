import styles from "./styles.module.scss";
import greenLogo from "../../../public/assets/logo_verde.svg";
import iconLogo from "../../../public/assets/logo_icon.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { ReturnButton } from "../../design/ReturnButton";

export function DetailsHeader() {
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.returnButtonWrapper}>
        <ReturnButton />
      </div>
      <div className={styles.logoWrapper}>
        <Image width={48} height={48} src={iconLogo} alt="" />
      </div>
      <div className={styles.fullLogoWrapper}>
        <Image width={129} height={48} src={greenLogo} alt="" />
      </div>

      <div className={styles.buttonsContainer}>
        <IconButtonPrimary icon={<TbBrandWhatsapp size="1.6rem" />} />
        <IconButtonPrimary icon={<BiMenuAltRight size="1.6rem" />} />
      </div>
    </header>
  );
}
