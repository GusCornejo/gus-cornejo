"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./carouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselModel } from "@/models/CarouselModel";
import "./carousel.css";
import Image from "next/image";

type PropType = {
  slides: CarouselModel[];
  title: string;
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div>
        <h2 className="text-white text-xl lg:text-3xl text-start mb-3">
          {props.title}
        </h2>
      </div>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index.id}
              onClick={
                index.link ? () => window.open(index.link, "_blank") : undefined
              }
            >
              <Image
                src={index.imageUrl}
                alt={`slide picture ${index.id}`}
                className="rounded-2xl border-black border-1 shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
