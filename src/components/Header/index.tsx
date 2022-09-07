import styles from "./styles.module.scss";
import whiteLogo from "../../../public/assets/logo_branco.svg";
import greenLogo from "../../../public/assets/logo_verde.svg";
import Image from "next/image";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";

interface IProps {
  isSearchVisible: boolean;
}

export function Header({ isSearchVisible }: IProps) {
  const { toggleDrawer } = useContext(SystemContext);

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
          <a
            aria-label="Contato pelo WhatsApp"
            href="https://wa.me/5519971568585"
          >
            <IconButtonPrimary icon={<TbBrandWhatsapp size="1.6rem" />} />
          </a>
          <div onClick={toggleDrawer}>
            <IconButtonPrimary icon={<BiMenuAltRight size="1.6rem" />} />
          </div>
        </div>
      </div>
    </div>
  );
}
