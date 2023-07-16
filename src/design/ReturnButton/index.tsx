import styles from "./styles.module.scss";

import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";
import { UIContext } from "../../context/uiContext";
import { useContext } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    goHome?: boolean
  }

export function ReturnButton({ goHome = false, ...props }: IconButtonProps) {
  const { startLoading } = useContext(UIContext);
  const router = useRouter();

  const handleClick = () => {
    if (goHome) { 
      router.push('/')
    } else { 
      router.back();
      startLoading();
    }
  }

  return (
    <button
      onClick={handleClick}
      className={styles.buttonContainer}
      {...props}
    >
      <HiArrowNarrowLeft size="1.4rem" />
    </button>
  );
}
