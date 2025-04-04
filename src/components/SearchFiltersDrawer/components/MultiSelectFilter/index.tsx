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
  id?: string;
}

export function MultiSelectFilter({
  items,
  fieldName,
  filters,
  setFilters,
  color = false,
  id = ""
}: IProps) {
  const [viewAll, setViewAll] = useState(false);
  const initialFilterAmount = items.length <= 8 ? 8 : 4;
  const finalSplice = viewAll ? items.length : initialFilterAmount;
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
            id={id}
            aria-label={value.name}
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
              {!color && !!value.icon && (
                <Image
                  height={80}
                  width={80}
                  src={value.icon}
                  alt=""
                  // layout="responsive"
                />
              )}
            </div>
            <p className={styles.name}>{value.name}</p>
          </div>
        ))}
      </div>
      {items.length === values.length && !viewAll ? (
        <></>
      ) : !viewAll ? (
        <div className={styles.showButton} onClick={handleShowButton}>
          {`Ver mais ${items.length - values.length}`}
        </div>
      ) : (
        <div className={styles.showButton} onClick={handleShowButton}>
          Ver menos
        </div>
      )}
    </div>
  );
}
