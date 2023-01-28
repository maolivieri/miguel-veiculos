import styles from "./styles.module.scss";

import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import { UIContext } from "../../context/uiContext";
import { useContext } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ReturnButton({ ...props }: IconButtonProps) {
  const { startLoading } = useContext(UIContext);
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
        startLoading();
      }}
      className={styles.buttonContainer}
      {...props}
    >
      <HiArrowNarrowLeft size="1.4rem" />
    </button>
  );
}
