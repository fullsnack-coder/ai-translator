import { useState } from "react";
import { Feeling } from "../domain/feelings";
import s from "./FeelingSelector.module.css";

const feelingEmojis: Record<Feeling, string> = {
  feliz: "😄",
  triste: "😢",
  enojado: "😡",
  ansioso: "😰",
  estresado: "😩",
  cansado: "😴",
  aburrido: "😐",
  emocionado: "😆",
};

type Props = {
  onSelect: (feeling: Feeling) => void;
};

const FeelingSelector: React.FC<Props> = ({ onSelect }) => {
  const [activeFeeling, setActiveFeeling] = useState<Feeling | null>(null);
  return (
    <section>
      <h2>¿Cómo te sientes hoy?</h2>
      <div className={s.FeelingsWrapper}>
        {Object.entries(feelingEmojis).map(([feeling, emoji]) => (
          <button
            key={feeling}
            className={s.FeelingItem}
            style={{
              fontSize: activeFeeling === feeling ? "2em" : "1em",
            }}
            onClick={() => {
              setActiveFeeling(feeling as Feeling);
              onSelect(feeling as Feeling);
            }}
          >
            {emoji}
          </button>
        ))}
      </div>
      <p>
        {activeFeeling
          ? `Seleccionaste ${activeFeeling}`
          : "Selecciona un estado de ánimo"}
      </p>
    </section>
  );
};

export default FeelingSelector;
