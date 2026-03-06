import { useCallback, useState } from 'react';

import type { OptionKey, Options } from '@/types';

const CHARS: Record<OptionKey, string> = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

const DEFAULT_OPTIONS: Options = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
};

interface UsePasswordGeneratorReturn {
    length: number;
    setLength: (value: number) => void;
    options: Options;
    toggleOption: (key: OptionKey) => void;
    password: string;
    copied: boolean;
    copyToClipboard: () => void;
    generate: () => void;
}

export function usePasswordGenerator(): UsePasswordGeneratorReturn {
    const [length, setLength] = useState<number>(14);
    const [options, setOptions] = useState<Options>(DEFAULT_OPTIONS);
    const [password, setPassword] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const generate = useCallback(() => {
        const charset = (Object.entries(options) as [OptionKey, boolean][])
            .filter(([, enabled]) => enabled)
            .map(([key]) => CHARS[key])
            .join('');

        if (!charset) {
            return;
        }

        let pwd = '';
        for (let i = 0; i < length; i++) {
            pwd += charset[Math.floor(Math.random() * charset.length)];
        }

        setPassword(pwd);
        setCopied(false);
    }, [length, options]);

    const copyToClipboard = (): void => {
        if (!password) {
            return;
        }
        navigator.clipboard
            .writeText(password)
            .then(() => {})
            .catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    const toggleOption = (key: OptionKey): void => {
        const next: Options = { ...options, [key]: !options[key] };
        const hasAny = Object.values(next).some(Boolean);
        if (!hasAny) {
            return;
        }
        setOptions(next);
    };

    return {
        length,
        setLength,
        options,
        toggleOption,
        password,
        copied,
        copyToClipboard,
        generate,
    };
}
