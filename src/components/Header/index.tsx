import styles from "./styles.module.scss";
import whiteLogo from "../../../public/assets/whiteLogo.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButton } from "../../design/IconButton";

export function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <div>
        <Image width={129} height={48} src={whiteLogo} alt="" />
      </div>

      <div className={styles.buttonsContainer}>
        <IconButton icon={<TbBrandWhatsapp size={100} />} />
        <IconButton icon={<BiMenuAltRight size={100} />} />
      </div>
    </div>
  );
}
