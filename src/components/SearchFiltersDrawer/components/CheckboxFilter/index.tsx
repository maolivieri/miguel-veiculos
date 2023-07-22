import styles from "./styles.module.scss";
import { Checkbox } from "../../../../design/Checkbox";
import { Dispatch, SetStateAction, useState } from "react";
import { Filters, FiltersIndexes } from "../../../../context/systemContext";

interface IProps {
  items: string[];
  title?: string | null;
  setFilters: Dispatch<SetStateAction<Filters>>;
  filters: Filters;
  fieldName: FiltersIndexes;
  id?: string;
}

export function CheckboxFilter({
  items,
  title = null,
  fieldName,
  filters,
  setFilters,
  id = ""
}: IProps) {
  const [viewAll, setViewAll] = useState(false);
  const finalSplice = viewAll ? items.length : 10;
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
      <div className={styles.body}>
        {!!title && <p className={styles.title}>{title}</p>}
        {values.map((item) => (
          <div key={item} className={styles.checkbox}>
            <div>
              <Checkbox
                id={id}
                aria-label={item}
                checked={!!existingItems.find((x) => x === item)}
                onChange={() => handleSelection(item)}
              />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      {items.length === values.length ? (
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
