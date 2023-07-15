import { ReactNode, useState } from "react";
import { PageFooter } from "../PageFooter";
import { SideDrawer } from "../SideDrawer";
import { SubPagesHeader } from "../SubpagesHeader";
import styles from "./styles.module.scss";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { SliderDots } from "../../design/SliderDot";

interface IProps {
  images?: string[];
  title: string;
  copy?: string;
  children?: ReactNode;
  map?: boolean;
  hasBlur?: boolean;
}

const animation = { duration: 5000, easing: (t: number) => t };

export default function SubPages({
  copy,
  images,
  title,
  children,
  map,
  hasBlur = false
}: IProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      // mode: "free-snap",
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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
    <div className={styles.page}>
      <SideDrawer />
      <header className={styles.header}>
        <SubPagesHeader hasBlur={hasBlur} />
        {!!map && (
          <div className={styles.headerMapWrapper}>
            <div className={styles.headerMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.767361357166!2d-47.50901448566451!3d-22.99558068496674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d482d60e4b9%3A0x21d7d83f290c01e2!2sMiguel%20Ve%C3%ADculos!5e0!3m2!1sen!2sbr!4v1662749744604!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
        {!!images?.length && (
          <div
            ref={sliderRef}
            className={`keen-slider ${styles.headerImageWrapper}`}
          >
            {images.map((image) => (
              <div
                key={image}
                style={{
                  background: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className={`keen-slider__slide ${styles.headerImage}`}
              />
            ))}
          </div>
        )}
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          {!!map && (
            <div className={styles.cardMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.767361357166!2d-47.50901448566451!3d-22.99558068496674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d482d60e4b9%3A0x21d7d83f290c01e2!2sMiguel%20Ve%C3%ADculos!5e0!3m2!1sen!2sbr!4v1662749744604!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
          {!!images && (
            <div ref={sliderRef} className={`keen-slider ${styles.cardImage}`}>
              {images.map((image) => (
                <div
                  key={image}
                  className={`keen-slider__slide ${styles.image}`}
                  style={{
                    background: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
          )}
          <div className={styles.cardContent}>
            <h1 className={styles.pageTitle}>{title}</h1>
            {!!copy && <p className={styles.copy}>{copy}</p>}
            {!!children && children}
          </div>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
