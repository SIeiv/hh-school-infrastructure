import type { FC } from "react";

const TIPS: string[] = [
  "Не используйте один пароль на разных сайтах",
  "Пароль длиннее 12 символов значительно надёжнее",
  "Включите символы и цифры для сложности",
  "Используйте менеджер паролей для хранения",
  "Включите двухфакторную аутентификацию",
];

interface StrengthLevel {
  label: string;
  color: string;
  desc: string;
}

const STRENGTH_LEVELS: StrengthLevel[] = [
  { label: "Слабый",   color: "#e53935", desc: "до 8 символов, один тип" },
  { label: "Средний",  color: "#fb8c00", desc: "10–12, два типа"         },
  { label: "Хороший",  color: "#43a047", desc: "14+, три типа"           },
  { label: "Отличный", color: "#1e88e5", desc: "18+, все типы"           },
];

export const Sidebar: FC = () => (
  <div className="hh-sidebar">
    <div className="hh-banner">
      <strong>🔒 Защитите аккаунт</strong>
      Используйте уникальный пароль для каждого сервиса
    </div>

    <div className="hh-tip-card">
      <div className="hh-tip-title">
        <div className="hh-tip-icon">💡</div>
        Советы по безопасности
      </div>
      <ul className="hh-tip-list">
        {TIPS.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </div>

    <div className="hh-tip-card">
      <div className="hh-tip-title">
        <div className="hh-tip-icon">📊</div>
        Оценка паролей
      </div>
      <ul className="hh-tip-list">
        {STRENGTH_LEVELS.map(({ label, color, desc }) => (
          <li key={label}>
            <span style={{ color, fontWeight: 600 }}>{label}</span> — {desc}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
