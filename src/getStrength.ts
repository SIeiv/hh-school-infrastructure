import type { Options, StrengthResult } from '@/types';

export function getStrength(_: string, length: number, options: Options): StrengthResult {
    let score = 0;

    if (length >= 10) {
        score += 1;
    }
    if (length >= 14) {
        score += 1;
    }
    if (length >= 18) {
        score += 1;
    }

    const activeTypes = Object.values(options).filter(Boolean).length;
    score += activeTypes;

    if (score <= 2) {
        return { label: 'Слабый', color: '#e53935', width: '18%' };
    }
    if (score <= 3) {
        return { label: 'Средний', color: '#fb8c00', width: '45%' };
    }
    if (score <= 5) {
        return { label: 'Хороший', color: '#43a047', width: '72%' };
    }
    return { label: 'Отличный', color: '#1e88e5', width: '100%' };
}
