import type { FC } from 'react';

export const Header: FC = () => (
    <header className="hh-header">
        <div className="hh-logo">
            <span className="hh-logo-mark">hh</span>
            <span className="hh-logo-sub">Безопасность аккаунта</span>
        </div>
        <nav className="hh-header-nav">
            <span className="hh-nav-link">Вакансии</span>
            <span className="hh-nav-link">Резюме</span>
            <span className="hh-nav-link">Работодателям</span>
            <button className="hh-btn-header">Войти</button>
        </nav>
    </header>
);
