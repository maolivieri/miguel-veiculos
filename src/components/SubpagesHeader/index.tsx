import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

//components
import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { SystemContext } from "../../context/systemContext";

//assets
import greenLogo from "../../../public/assets/logo_verde.svg";
import logoIcon from "../../../public/assets/logo_icon.svg";

//icons
import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

export function SubPagesHeader() {
  const { toggleDrawer } = useContext(SystemContext);

  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.FixedWrapper}>
        <>
          <Link href="/" passHref>
            <a className={styles.largeLogo}>
              <Image width={129} height={48} src={greenLogo} alt="" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a className={styles.smallLogo}>
              <Image width={48} height={48} src={logoIcon} alt="" />
            </a>
          </Link>
        </>

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
