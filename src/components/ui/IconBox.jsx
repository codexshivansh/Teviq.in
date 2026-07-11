function IconBox({ icon: Icon, dark = false, className = '' }) {
  return (
    <span className={`icon-box ${dark ? 'icon-box-dark' : ''} ${className}`}>
      <Icon className="h-5 w-5" />
    </span>
  );
}

export default IconBox;
