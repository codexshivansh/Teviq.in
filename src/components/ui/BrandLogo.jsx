function BrandLogo({ variant = 'light', className = '' }) {
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return <img src={src} alt="Teviq.in" className={`w-auto object-contain ${className}`} />;
}

export default BrandLogo;
