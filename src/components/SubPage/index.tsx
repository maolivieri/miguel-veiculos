import Image from "next/image";
import { ReactNode } from "react";
import { PageFooter } from "../PageFooter";
import { SideDrawer } from "../SideDrawer";
import { SubPagesHeader } from "../SubpagesHeader";
import styles from "./styles.module.scss";

interface IProps {
  image?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  map?: boolean;
}

export default function SubPages({
  copy,
  image,
  title,
  children,
  map,
}: IProps) {
  return (
    <div className={styles.page}>
      <SideDrawer />
      <header className={styles.header}>
        <SubPagesHeader />
        <div className={styles.headerImageWrapper}>
          {!!map && (
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
          )}
          {!!image && (
            <div className={styles.headerImage}>
              <Image
                width={600}
                height={600}
                src={image}
                alt=""
                layout="responsive"
              />
            </div>
          )}
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            {!!map && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.767361357166!2d-47.50901448566451!3d-22.99558068496674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61d482d60e4b9%3A0x21d7d83f290c01e2!2sMiguel%20Ve%C3%ADculos!5e0!3m2!1sen!2sbr!4v1662749744604!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
            {!!image && (
              <Image
                width={600}
                height={600}
                src={image}
                alt=""
                layout="responsive"
              />
            )}
          </div>
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
