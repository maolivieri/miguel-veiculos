import styles from "./styles.module.scss";
import whiteLogo from "../../../public/assets/logo_branco.svg";
import greenLogo from "../../../public/assets/logo_verde.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";

interface IProps {
  isSearchVisible: boolean;
}

export function Header({ isSearchVisible }: IProps) {
  return (
    <div className={styles.HeaderContainer}>
      <div
        // className={`${styles.FixedWrapper} ${isSearchVisible && styles.hidden}`}
        className={`${styles.FixedWrapper} ${
          isSearchVisible && styles.fixedWrapperCondensed
        }`}
      >
        <div>
          <Image
            width={129}
            height={48}
            src={isSearchVisible ? greenLogo : whiteLogo}
            alt=""
          />
        </div>

        <div className={styles.buttonsContainer}>
          <IconButtonPrimary icon={<TbBrandWhatsapp size="1.6rem" />} />
          <IconButtonPrimary icon={<BiMenuAltRight size="1.6rem" />} />
        </div>
      </div>
    </div>
  );
}
