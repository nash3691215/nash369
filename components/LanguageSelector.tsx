'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
      <button
        onClick={() => switchLocale('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          locale === 'fr'
            ? 'bg-white text-gray-900'
            : 'text-white/70 hover:text-white'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          locale === 'en'
            ? 'bg-white text-gray-900'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
