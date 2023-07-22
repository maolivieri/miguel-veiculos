import { useContext, useState } from "react";
import { ListsContext } from "../../../../context/listsContext";
import { SystemContext } from "../../../../context/systemContext";
import { ButtonPrimary } from "../../../../design/ButtonPrimary";
import { ButtonSecondary } from "../../../../design/ButtonSecondary";
import { IconOpcionais } from "../../../../design/Icons";
import { CheckboxFilter } from "../../../../design/CheckboxFilter";
import styles from "./styles.module.scss";
import { BiChevronLeft } from "react-icons/bi";

export function FilterOpcionais() {
  const { activeFilters, setActiveFilters, setFocusedFilter } =
    useContext(SystemContext);

  const { essenciais, confortos, tecnologias, segurancas } =
    useContext(ListsContext);
  const [essentials, setEssentials] = useState(activeFilters.essenciais);
  const [confort, setConfort] = useState(activeFilters.conforto);
  const [technology, setTechnology] = useState(activeFilters.tecnologia);
  const [safety, setSafety] = useState(activeFilters.seguranca);

  const handleConfirmFilter = () => {
    setActiveFilters((prevState) => ({
      ...prevState,
      essenciais: essentials,
      conforto: confort,
      tecnologia: technology,
      seguranca: safety,
    }));
    setFocusedFilter(null);
  };

  const clearFilters = () => {
    setEssentials([]);
    setConfort([]);
    setTechnology([]);
    setSafety([]);
    setActiveFilters((prevState) => ({
      ...prevState,
      essenciais: [],
      conforto: [],
      tecnologia: [],
      seguranca: [],
    }));
  };

  const handleEssentialsChange = (name: string) => {
    if (essentials.indexOf(name) === -1) {
      setEssentials((prevState) => [...prevState, name]);
    } else {
      setEssentials((prevState) => prevState.filter((state) => state !== name));
    }
  };
  const handleConfortChange = (name: string) => {
    if (confort.indexOf(name) === -1) {
      setConfort((prevState) => [...prevState, name]);
    } else {
      setConfort((prevState) => prevState.filter((state) => state !== name));
    }
  };
  const handleTechnologyChange = (name: string) => {
    if (technology.indexOf(name) === -1) {
      setTechnology((prevState) => [...prevState, name]);
    } else {
      setTechnology((prevState) => prevState.filter((state) => state !== name));
    }
  };
  const handleSafetyChange = (name: string) => {
    if (safety.indexOf(name) === -1) {
      setSafety((prevState) => [...prevState, name]);
    } else {
      setSafety((prevState) => prevState.filter((state) => state !== name));
    }
  };

  const isButtonDisabled = (!essentials?.length && !confort?.length && !technology?.length && !safety?.length)

  return (
    <>
      <div className={styles.mainTitleWrapper}>
      <div className={styles.mainTitle}>
        <IconOpcionais size="1.4rem" />
        <h3>Opcionais</h3>
        </div>
        <div className={styles.closeArrow} onClick={() => setFocusedFilter(null)}>
          <BiChevronLeft size="2rem" />
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <div>
        <h6 className={styles.listTitle}>Essenciais</h6>
        {essenciais.map((essential) => (
          <CheckboxFilter
            id="ga4_click_filter_essential"
            ariaLabel={essential.nome}
            key={essential.nome}
            name={essential.nome}
            handleCheckboxChange={() => handleEssentialsChange(essential.nome)}
            checked={!!essentials.find((x) => x === essential.nome)}
          />
        ))}
        <h6 className={styles.listTitle}>Conforto</h6>
        {confortos.map((conf) => (
          <CheckboxFilter
            id="ga4_click_filter_confort"
            ariaLabel={conf.nome}
            key={conf.nome}
            name={conf.nome}
            handleCheckboxChange={() => handleConfortChange(conf.nome)}
            checked={!!confort.find((x) => x === conf.nome)}
          />
        ))}
        <h6 className={styles.listTitle}>Tecnologia</h6>
        {tecnologias.map((tech) => (
          <CheckboxFilter
            id="ga4_click_filter_tech"
            ariaLabel={tech.nome}
            key={tech.nome}
            name={tech.nome}
            handleCheckboxChange={() => handleTechnologyChange(tech.nome)}
            checked={!!technology.find((x) => x === tech.nome)}
          />
        ))}
        <h6 className={styles.listTitle}>Segurança</h6>
        {segurancas.map((safe) => (
          <CheckboxFilter
            id="ga4_click_filter_safe"
            ariaLabel={safe.nome}
            key={safe.nome}
            name={safe.nome}
            handleCheckboxChange={() => handleSafetyChange(safe.nome)}
            checked={!!safety.find((x) => x === safe.nome)}
          />
        ))}
      </div>
      </div>
      <div className={styles.buttonsWrapper}>
        <ButtonSecondary text="Limpar" onClick={clearFilters} disabled={isButtonDisabled}  />
        <ButtonPrimary text="Aplicar" onClick={handleConfirmFilter} disabled={isButtonDisabled}  />
      </div>
    </>
  );
}
