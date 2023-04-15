import { ReactNode, useContext } from "react";
import Link, { LinkProps } from "next/link";
import { BsInfoCircle, BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { SystemContext } from "../../context/systemContext";
import { CloseButton } from "../../design/CloseButton";
import styles from "./styles.module.scss";

interface LineItemProps {
  icon: ReactNode;
  text: string;
  to: string;
  target?: string;
}

interface LinkItemProps extends LinkProps {
  icon: ReactNode;
  text: string;
  href: string;
  type?: string;
}

export function SideDrawer() {
  const { isDrawerOpen, toggleDrawer } = useContext(SystemContext);

  const LinkItem = ({ icon, text, href, ...props }: LinkItemProps) => {
    return (
      <Link href={href} passHref {...props}>
        <a className={styles.lineItem} onClick={toggleDrawer}>
          <div>{icon}</div>
          <p>{text}</p>
        </a>
      </Link>
    );
  };

  const LineItem = ({ icon, text, to, target = "_blank" }: LineItemProps) => {
    return (
      <a className={`${styles.lineItem}`} href={to} target={target}>
        <div>{icon}</div>
        <p>{text}</p>
      </a>
    );
  };

  return (
    <div className={`${styles.container} ${isDrawerOpen && styles.openDrawer}`}>
      <nav className={`${styles.nav} ${isDrawerOpen && styles.openNavDrawer}`}>
        <div className={styles.content}>
          <div className={styles.closeButton}>
            <CloseButton onClick={toggleDrawer} />
          </div>
          <div className={styles.abouttWrapper}>
            <h1 className={styles.drawerTitle}>Miguel Veículos</h1>
            <p className={styles.drawerDescription}>
              Desde 1998 fazendo bons negócios!
            </p>
            <LinkItem
              icon={<BsInfoCircle />}
              text="Sobre nós"
              href="/sobre-nos"
            />
            {/* <LinkItem
              icon={<MdOutlineStorefront />}
              text="Conheça a loja"
              href="/nossa-loja"
            /> */}
            <LinkItem
              icon={<MdOutlineLocationOn />}
              text="Localização"
              href="/localizacao"
            />
          </div>
          <div className={styles.contactWrapper}>
            <h3 className={styles.lineTitle}>Contato</h3>
            <LineItem
              icon={<FaWhatsapp />}
              text="WhatsApp"
              aria-label="Contato pelo WhatsApp"
              to="https://wa.me/5519974040531"
            />
            <LineItem
              icon={<BsTelephone />}
              text="(19) 3491-3114"
              to="tel:1934913114"
            />
            <LineItem
              icon={<MdOutlineMailOutline />}
              text="Email"
              to="mailto:miguel.veiculos@uol.com.br"
            />
          </div>
          <div className={styles.contactWrapper}>
            <h3 className={styles.lineTitle}>Nos acompanhe</h3>

            <LineItem
              icon={<FaInstagram />}
              text="Instagram"
              to="https://www.instagram.com/veiculosmiguel/"
            />
            <LineItem
              icon={<FaFacebookF />}
              text="Facebook"
              to="https://www.facebook.com/profile.php?id=100009341935363"
            />
          </div>
        </div>
        <p>© Copyright 2023 Miguel Veículos</p>
      </nav>
      <div className={styles.dropShaddow} onClick={toggleDrawer} />
    </div>
  );
}
