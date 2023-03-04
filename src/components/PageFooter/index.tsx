import styles from "./styles.module.scss";
import logoIcon from "../../../public/assets/logo_icon_white.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";

export function PageFooter() {
  const { isFiltersOpen } = useContext(SystemContext);

  return (
    <footer
      className={`${styles.footer} ${isFiltersOpen && styles.openFilterZ}`}
    >
      <div className={styles.logo}>
        <Image width={48} height={48} src={logoIcon} alt="" />
      </div>
      <div className={styles.text}>
        <p className={styles.address}>
          <span>{`Praça 13 de Maio, 70, Centro, `}</span>
          <span>{`Capivari - SP - 13.360-000`}</span>
        </p>
        <p className={styles.contact}>
          <span className={styles.tab}>{` | `}</span>
          <span>{`(19) 3491-3114`}</span>
          <span>{` | `}</span>
          <span>{`(19) 97404-0532`}</span>
          {/* <span className={styles.tab}>{` | `}</span> */}
        </p>
        <p className={styles.socials}>
          <a
            href="https://wa.me/5519974040531"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/veiculosmiguel/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009341935363"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </p>
      </div>
      <p className={styles.c}>© Copyright 2023 Miguel Veículos</p>
    </footer>
  );
}
