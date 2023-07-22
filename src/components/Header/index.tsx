import styles from "./styles.module.scss";
import whiteLogo from "../../../public/assets/whiteLogo.png";
import greenLogo from "../../../public/assets/greenLogo.png";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { BiMenuAltRight } from "react-icons/bi";
import { TbBrandWhatsapp } from "react-icons/tb";

import { IconButtonPrimary } from "../../design/IconButtonPrimary";
import { useContext } from "react";
import { SystemContext } from "../../context/systemContext";
import Link from "next/link";

interface IProps {
  isSearchVisible: boolean;
}

export function Header({ isSearchVisible }: IProps) {
  const { toggleDrawer } = useContext(SystemContext);
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 2500);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className={styles.HeaderContainer}>
      <div ref={ref} className="keen-slider">
        <div
          className={`keen-slider__slide ${styles.HeaderImageBox}`}
          style={{
            backgroundImage: `url(/assets/images/cover_1.jpg)`,
            backgroundPosition: "center 30%",
          }}
        />
        <div
          className={`keen-slider__slide ${styles.HeaderImageBox}`}
          style={{ backgroundImage: `url(/assets/images/cover_2.jpg)` }}
        />
        <div
          className={`keen-slider__slide ${styles.HeaderImageBox}`}
          style={{ backgroundImage: `url(/assets/images/cover_3.jpg)` }}
        />
        <div
          className={`keen-slider__slide ${styles.HeaderImageBox}`}
          style={{ backgroundImage: `url(/assets/images/cover_4.jpg)` }}
        />
      </div>
      <div
        // className={`${styles.FixedWrapper} ${isSearchVisible && styles.hidden}`}
        className={`${styles.FixedWrapper} ${
          isSearchVisible && styles.fixedWrapperCondensed
        }`}
      >
        <Link href="/" passHref>
          <a className={styles.logoWrapper}>
            <Image
              width={129}
              height={48}
              src={isSearchVisible ? greenLogo : whiteLogo}
              alt=""
              layout="responsive"
            />
          </a>
        </Link>

        <div className={styles.buttonsContainer}>
          <a
            id="ga4_click_whatsapp" 
            aria-label="Contato pelo WhatsApp"
            href="https://wa.me/5519974040531"
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
