import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import styles from "./styles.module.scss";

interface Object {
  name: string;
  icon?: string | undefined;
}

interface IProps {
  items: Object[];
  color?: boolean;
}

export function MultiSelectFilter({ items, color = false }: IProps) {
  const [viewAll, setViewAll] = useState(false);
  const finalSplice = viewAll ? items.length : 3;

  function handleShowButton() {
    setViewAll((prevState) => !prevState);
  }

  function handleSelection() {
    console.log("abc");
  }

  const values = items.slice(0, finalSplice);

  function isActive(): Boolean {
    return false;
  }

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        {values.map((value) => (
          <div key={value.name} className={styles.item}>
            <div
              className={`${styles.icon} ${isActive() && styles.selected}`}
              style={{
                backgroundColor: `${color ? value.icon : "transparent"}`,
              }}
            >
              {!color && (
                <Image
                  height={80}
                  width={80}
                  src={value.icon || ""}
                  alt=""
                  layout="responsive"
                />
              )}
            </div>
            <p className={styles.name}>{value.name}</p>
          </div>
        ))}
      </div>
      {items.length === values.length ? (
        <></>
      ) : !viewAll ? (
        <div className={styles.showButton} onClick={handleShowButton}>
          {`VER MAIS ${items.length - values.length}`}
        </div>
      ) : (
        <div className={styles.showButton} onClick={handleShowButton}>
          VER MENOS
        </div>
      )}
    </div>
  );
}
