import styles from "./styles.module.scss";
import { SearchInput } from "../../design/SearchInput";
import { IconButtonSecondary } from "../../design/IconButtonSecondary";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export function HomeSearch() {
  return (
    <div className={styles.container}>
      <SearchInput />
      <IconButtonSecondary icon={<TbAdjustmentsHorizontal size="1.4rem" />} />
    </div>
  );
}
