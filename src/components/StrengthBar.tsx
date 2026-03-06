import type { FC } from 'react';

import { getStrength } from '@/getStrength';
import type { Options } from '@/types';

interface StrengthBarProps {
    password: string;
    length: number;
    options: Options;
}

export const StrengthBar: FC<StrengthBarProps> = ({ password, length, options }) => {
    if (!password) {
        return null;
    }

    const { label, color, width } = getStrength(password, length, options);

    return (
        <div className="hh-strength-wrap">
            <div className="hh-strength-row">
                <span className="hh-strength-title">Надёжность пароля</span>
                <span className="hh-strength-val" style={{ color }}>
                    {label}
                </span>
            </div>
            <div className="hh-strength-track">
                <div className="hh-strength-fill" style={{ width, background: color }} />
            </div>
        </div>
    );
};
