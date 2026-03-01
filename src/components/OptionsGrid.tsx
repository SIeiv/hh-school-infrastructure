import type { FC } from 'react';

import type { OptionKey, OptionMeta, Options } from '@/types';

const OPTIONS_META: OptionMeta[] = [
    { key: 'uppercase', label: 'Прописные A–Z' },
    { key: 'lowercase', label: 'Строчные a–z' },
    { key: 'numbers', label: 'Цифры 0–9' },
    { key: 'symbols', label: 'Символы !@#' },
];

const Checkmark: FC = () => (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

interface OptionsGridProps {
    options: Options;
    onToggle: (key: OptionKey) => void;
}

export const OptionsGrid: FC<OptionsGridProps> = ({ options, onToggle }) => (
    <div className="hh-section">
        <div className="hh-section-title">Состав пароля</div>
        <div className="hh-checks">
            {OPTIONS_META.map(({ key, label }) => (
                <div
                    key={key}
                    className={`hh-check-item ${options[key] ? 'active' : ''}`}
                    onClick={() => onToggle(key)}
                >
                    <div className="hh-checkbox">{options[key] && <Checkmark />}</div>
                    <span className="hh-check-label">{label}</span>
                </div>
            ))}
        </div>
    </div>
);
