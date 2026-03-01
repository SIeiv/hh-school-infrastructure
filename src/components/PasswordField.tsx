import type { FC, MouseEvent } from "react";

interface PasswordFieldProps {
  password: string;
  copied: boolean;
  onCopy: () => void;
}

export const PasswordField: FC<PasswordFieldProps> = ({ password, copied, onCopy }) => {
  const handleCopyClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onCopy();
  };

  return (
    <>
      <div className="hh-password-label">Ваш пароль</div>
      <div className="hh-password-field" onClick={onCopy}>
        <span className={`hh-password-text ${!password ? "empty" : ""}`}>
          {password || "Нажмите «Сгенерировать»"}
        </span>
        <button
          className={`hh-copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopyClick}
        >
          {copied ? "✓ Скопировано" : "⎘ Копировать"}
        </button>
      </div>
    </>
  );
};
