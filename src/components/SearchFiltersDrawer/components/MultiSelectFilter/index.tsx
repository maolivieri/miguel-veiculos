import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters, FiltersIndexes } from "../../../../context/systemContext";
import styles from "./styles.module.scss";

interface Object {
  name: string;
  icon?: string | undefined;
}

interface IProps {
  items: Object[];
  setFilters: Dispatch<SetStateAction<Filters>>;
  filters: Filters;
  fieldName: FiltersIndexes;
  color?: boolean;
}

export function MultiSelectFilter({
  items,
  fieldName,
  filters,
  setFilters,
  color = false,
}: IProps) {
  const [viewAll, setViewAll] = useState(false);
  const finalSplice = viewAll ? items.length : 3;
  const values = items.slice(0, finalSplice);

  const thisFilter = filters[fieldName];
  const existingItems: string[] = Array.isArray(thisFilter) ? thisFilter : [];

  function handleShowButton() {
    setViewAll((prevState) => !prevState);
  }

  function handleSelection(name: string) {
    const indexOfName = existingItems.indexOf(name);

    if (indexOfName > -1) {
      setFilters({
        ...filters,
        [fieldName]: existingItems.filter((item) => item !== name),
      });
    } else {
      setFilters({ ...filters, [fieldName]: [...existingItems, name] });
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.content}>
        {values.map((value) => (
          <div
            key={value.name}
            className={styles.item}
            onClick={() => handleSelection(value.name)}
          >
            <div
              className={`${styles.icon} ${
                !!existingItems.find((x) => x === value.name) && styles.selected
              }`}
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
