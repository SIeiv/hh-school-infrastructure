import type { FC } from "react";
import "./PasswordGenerator.css";

import { usePasswordGenerator } from "./usePasswordGenerator";
import { Header }               from "./components/Header";
import { PasswordField }        from "./components/PasswordField";
import { StrengthBar }          from "./components/StrengthBar";
import { LengthSlider }         from "./components/LengthSlider";
import { OptionsGrid }          from "./components/OptionsGrid";
import { Sidebar }              from "./components/Sidebar";

const PasswordGenerator: FC = () => {
  const {
    length, setLength,
    options, toggleOption,
    password,
    copied, copyToClipboard,
    generate,
  } = usePasswordGenerator();

  return (
    <div className="hh-app">
      <Header />

      <nav className="hh-breadcrumb">
        <a>Главная</a>
        <span>›</span>
        <a>Настройки</a>
        <span>›</span>
        <span>Генератор паролей</span>
      </nav>

      <main className="hh-main">
        {/* ─── Основная карточка ─── */}
        <div className="hh-card">
          <div className="hh-card-header">
            <div className="hh-card-title">Генератор надёжного пароля</div>
            <div className="hh-card-subtitle">
              Создайте безопасный пароль для вашего аккаунта
            </div>
          </div>

          <div className="hh-card-body">
            <PasswordField
              password={password}
              copied={copied}
              onCopy={copyToClipboard}
            />

            <StrengthBar
              password={password}
              length={length}
              options={options}
            />

            <div className="hh-divider" />

            <LengthSlider length={length} onChange={setLength} />

            <OptionsGrid options={options} onToggle={toggleOption} />

            <button className="hh-generate-btn" onClick={generate}>
              Сгенерировать пароль
            </button>
          </div>
        </div>

        {/* ─── Сайдбар ─── */}
        <Sidebar />
      </main>

      <footer className="hh-footer">
        © 2025 hh.ru — Все права защищены · Политика конфиденциальности · Пользовательское соглашение
      </footer>
    </div>
  );
};

export default PasswordGenerator;
