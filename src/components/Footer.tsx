const Footer: React.FC = () => (
  <footer className="hairline mt-32 mx-6 md:mx-10 pt-8 pb-8 flex flex-col md:flex-row justify-between gap-4 mono text-[11px] uppercase tracking-[0.3em] text-muted relative z-10">
    <div>© {new Date().getFullYear()} Martin Pandarski</div>
    <div>Sofia · 42.6977° N, 23.3219° E</div>
  </footer>
);

export default Footer;
