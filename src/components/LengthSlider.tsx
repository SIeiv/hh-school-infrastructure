import type { ChangeEvent, FC } from "react";

interface LengthSliderProps {
  length: number;
  onChange: (value: number) => void;
}

export const LengthSlider: FC<LengthSliderProps> = ({ length, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="hh-section">
      <div className="hh-section-title">
        Длина пароля —{" "}
        <span style={{ color: "#d6001c" }}>{length} символов</span>
      </div>
      <div className="hh-slider-row">
        <input
          type="range"
          className="hh-slider"
          min={6}
          max={32}
          value={length}
          onChange={handleChange}
        />
        <span className="hh-slider-val">{length}</span>
      </div>
    </div>
  );
};
