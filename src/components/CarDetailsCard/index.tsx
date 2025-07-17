import Image from "next/image";
import styles from "./styles.module.scss";

import { CarDetailSpecCard } from "../CarDetailSpecCard";
import { OptionalCard } from "../OptionalCard";
import { ICar } from "../../types/Car";
import { formatToCurrency } from "../../lib/formatToCurrency";
import car_placeholder from "../../../public/assets/images/car-placeholder.png";
import {
  IconAno,
  IconAssentos,
  IconAutonomia,
  IconCambio,
  IconCarroceria,
  IconCombustivel,
  IconConforto,
  IconCor,
  IconDocumentation,
  IconEssenciais,
  IconKM,
  IconPlaca,
  IconPortas,
  IconPotencia,
  IconSeguranca,
  IconTecnologia,
  IconTracao,
} from "../../design/Icons";
import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { TrackDetails } from "keen-slider";
import { SliderArrow } from "../../design/SliderArrow";
import { SliderDots } from "../../design/SliderDot";
import { formatToBigNumber } from "../../lib/formatBigNumber";
import { useRouter } from "next/router";
import { ContactUsButton } from "../ContactUsButton";

//icons

interface IProps {
  car: ICar;
}



export function CarDetailsCard({ car }: IProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [details, setDetails] = useState<TrackDetails | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
      // aspectRatio: "1350/1080",
      aspectRatio: "5/4",
      width: "100%"
    };
  }

  const arrayOfFotos = car?.fotos?.fotos?.map((foto) => foto?.url) || [];
  const arrayOfImages = [car.main_image?.url, ...arrayOfFotos].filter(Boolean);

  return (
    <main className={styles.mainContainer}>
      <header>{/* <ReturnButton /> */}</header>
      <div className={styles.imageAndDetailsWrapper}>
        <div className={styles.imageCarrousel}>
          <div
            ref={sliderRef}
            className={`keen-slider zoom-out ${styles.slider}`}
          >
            {arrayOfImages.map((url, idx) => (
              <div
                key={idx}
                className={`keen-slider__slide  zoom-out__slide ${styles.imageWrapper} `}
                id="ga4_click_slider_image"
              >
                <div
                  style={scaleStyle(idx)}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    // width={1350}
                    // height={1080}
                    src={url || car_placeholder}
                    alt=""
                    priority
                    fill
                  // style={{ height: 'auto', width: '100%' }}
                  />
                </div>
              </div>
            ))}

            {loaded && instanceRef.current && (
              <>
                <SliderArrow
                  left
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <SliderArrow
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
          {loaded && instanceRef.current && (
            <SliderDots
              currentSlide={currentSlide}
              dotsLength={instanceRef.current.track.details.slides.length}
              moveToIndex={instanceRef.current?.moveToIdx}
            />
          )}
        </div>
        <div className={styles.info}>
          <div className={styles.carInfoWrapper}>
            <div className={styles.brandImageWrapper}>
              <Image
                width={150}
                height={150}
                src={car.marca?.logo?.url}
                alt={`logotipo da marca ${car.marca?.nome}`}
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
            <h3 className={styles.name}>{car.modelo}</h3>
            <div className={styles.priceAndFlagsWrapper}>
              <p className={styles.price}>{formatToCurrency(car.preco)}</p>
              <div className={styles.flagsWrapper}>
                {(car.opcional_esquerdo || car.opcional_direito) && (
                  <div
                    className={
                      car.opcional_esquerdo && car.opcional_direito
                        ? styles.leftFlag
                        : car.opcional_esquerdo && !car.opcional_direito
                          ? styles.leftFlagOnly
                          : styles.leftFlagInverted
                    }
                  >
                    {car.opcional_esquerdo ? "IPVA PARCIAL" : "IPVA PAGO"}
                  </div>
                )}
                {car.opcional_esquerdo && car.opcional_direito && (
                  <div className={styles.rightFlag}>IPVA PAGO</div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.specsWrapper}>
            <CarDetailSpecCard
              icon={<IconAno size={14} />}
              title="Ano"
              value={`${car.anoFabricacao} | ${car.anoModelo}`}
            />
            <CarDetailSpecCard
              icon={<IconKM size={14} />}
              title="KM"
              value={`${formatToBigNumber(car.km)} KM`}
            />
            <CarDetailSpecCard
              icon={<IconCombustivel size={14} />}
              title="Combustível"
              value={car.combustivel?.nome}
            />
            <CarDetailSpecCard
              icon={<IconPotencia size={14} />}
              title="Motor"
              value={car.potencia}
            />
            <CarDetailSpecCard
              icon={<IconCambio size={12} />}
              title="Câmbio"
              value={car.cambio?.nome}
            />
            <CarDetailSpecCard
              icon={<IconAutonomia size={12} />}
              title="Autonomia"
              value={`${car.autonomia} Km/L`}
            />
            <CarDetailSpecCard
              icon={<IconTracao size={16} />}
              title="Tração"
              value={car.tracao}
            />
            <CarDetailSpecCard
              icon={<IconPortas size={14} />}
              title="Portas"
              value={`${car.portas}`}
            />
            <CarDetailSpecCard
              icon={<IconPlaca size={14} />}
              title="Placa"
              value={car.finalDaPlaca}
            />
            <CarDetailSpecCard
              icon={<IconCor size={14} />}
              title="Cor"
              value={car.cor?.nome}
            />
            <CarDetailSpecCard
              icon={<IconAssentos size={14} />}
              title="Assentos"
              value={`${car.assentos}`}
            />
            <CarDetailSpecCard
              icon={<IconCarroceria size={14} />}
              title="Carroceria"
              value={car.carroceria?.nome}
            />
            <div className={styles.contactUsBox}>
              <div className={styles.contactUsText}>
                <p><b>Mais informações? </b>Fale com nossos vendedores.</p>
              </div>
              <div className={styles.contactUsButton}>
                <ContactUsButton id="ga4_click_contactus" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {(!!car.essenciais.length ||
        !!car.confortos.length ||
        !!car.documentacoes.length ||
        !!car.tecnologias.length ||
        !!car.segurancas.length) && (
          <>
            <h4 className={styles.optionalsHeadTitle}>Itens do veículo</h4>
            <div className={styles.optionalsWrapper}>
              {!!car.documentacoes.length && (
                <OptionalCard
                  icon={<IconDocumentation />}
                  title="Documentação"
                  list={car.documentacoes}
                />
              )}
              {!!car.essenciais.length && (
                <OptionalCard
                  icon={<IconEssenciais />}
                  title="Essenciais"
                  list={car.essenciais}
                />
              )}
              {!!car.confortos.length && (
                <OptionalCard
                  icon={<IconConforto />}
                  title="Conforto"
                  list={car.confortos}
                />
              )}
              {!!car.tecnologias.length && (
                <OptionalCard
                  icon={<IconTecnologia />}
                  title="Tecnologia"
                  list={car.tecnologias}
                />
              )}
              {!!car.segurancas.length && (
                <OptionalCard
                  icon={<IconSeguranca />}
                  title="Segurança"
                  list={car.segurancas}
                />
              )}
            </div>
          </>
        )}
    </main>
  );
}
