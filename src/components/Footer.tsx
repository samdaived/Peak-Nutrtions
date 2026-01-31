import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PN</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Peak Nutrition Health & Wellness. {t.footer.rights}.
            </p>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
