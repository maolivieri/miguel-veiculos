import styles from "./styles.module.scss";

import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ReturnButton({ ...props }: IconButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={styles.buttonContainer}
      {...props}
    >
      <HiArrowNarrowLeft size="1.4rem" />
    </button>
  );
}
