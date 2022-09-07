import {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ReactComponentElement,
  ReactNode,
  useContext,
} from "react";
import { BsInfoCircle, BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaRegPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineStorefront } from "react-icons/md";
import { SystemContext } from "../../context/systemContext";
import { CloseButton } from "../../design/CloseButton";
import styles from "./styles.module.scss";

interface LineItemProps {
  icon: ReactNode;
  text: string;
  to: string;
  target?: string;
}

const LineItem = ({ icon, text, to, target = "_blank" }: LineItemProps) => {
  return (
    <a className={styles.lineItem} href={to} target={target}>
      <div>{icon}</div>
      <p>{text}</p>
    </a>
  );
};

export function SideDrawer() {
  const { isDrawerOpen, toggleDrawer } = useContext(SystemContext);
  return (
    <div className={`${styles.container} ${isDrawerOpen && styles.openDrawer}`}>
      <nav className={`${styles.nav} ${isDrawerOpen && styles.openNavDrawer}`}>
        <div className={styles.closeButton}>
          <CloseButton onClick={toggleDrawer} />
        </div>
        <div className={styles.contactWrapper}>
          <LineItem
            icon={<FaWhatsapp />}
            text="WhatsApp"
            aria-label="Contato pelo WhatsApp"
            to="https://wa.me/5519971568585"
          />
          <LineItem icon={<BsTelephone />} text="Telefone" to="" />
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
          <LineItem
            icon={<FaRegPaperPlane />}
            text="Email"
            to="mailto:test@test.com"
          />
        </div>
        <div className={styles.abouttWrapper}>
          <h3 className={styles.lineTitle}>Miguel Veículos</h3>
          <LineItem icon={<BsInfoCircle />} text="Sobre nós" to="" />
          <LineItem
            icon={<MdOutlineStorefront />}
            text="Conheça a loja"
            to=""
          />
          <LineItem icon={<MdOutlineLocationOn />} text="Localização" to="" />
        </div>
      </nav>
      <div className={styles.dropShaddow} onClick={toggleDrawer} />
    </div>
  );
}
