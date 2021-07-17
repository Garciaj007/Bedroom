import { useState } from "react";
import Image from "next/image";

function RadialButton({ index, onClick }) {
  return (
    <a role="button" onClick={() => onClick(index)}>
      <div />
    </a>
  );
}

function Slide({ image, title, p, active }) {
  return (
    <div className={`${active ? "active" : ""}`}>
      <Image {...image} alt={image.alt} />
      <div>
        <h2>How to Play</h2>
        <h3>{title}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
}

function Carousel({ slides }) {
  const [slide, setSlide] = useState(0);

  return (
    <div>
      <div className="presentation">
        {slides.map((elem, index) => {
          const slideProps = { active: slide === index, ...elem };
          return (
            <Slide key={`slide-${slideProps.title}-${index}`} {...slideProps} />
          );
        })}
      </div>
      <div className="controller">
        {slides.map((elem, index) => (
          <RadialButton
            key={`btn-${slideProps.title}-${index}`}
            index={index}
            onClick={(indx) => setSlide(indx)}
          />
        ))}
      </div>
    </div>
  );
}

export function Rules({ title, objective, rules }) {
  return (
    <section className="rules">
      <h1>{title}</h1>
      <p>{objective}</p>
      <Carousel {...rules} />
    </section>
  );
}
