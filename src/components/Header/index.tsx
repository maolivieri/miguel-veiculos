import styles from "./styles.module.scss";
import whiteLogo from "../../../public/assets/logo_branco.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";

export function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <div>
        <Image width={129} height={48} src={whiteLogo} alt="" />
      </div>

      <div className={styles.buttonsContainer}>
        <IconButtonPrimary icon={<TbBrandWhatsapp size="1.6rem" />} />
        <IconButtonPrimary icon={<BiMenuAltRight size="1.6rem" />} />
      </div>
    </div>
  );
}
