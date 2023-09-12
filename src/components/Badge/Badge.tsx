interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  className?: string;
}

const sizesConfig = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg'
};

const Badge = ({
  size = 'medium',
  children,
  className,
  ...props
}: BadgeProps) => {
  return (
    <div
      {...props}
      className={`absolute inline flex-grow-0 rounded-full bg-primary ${sizesConfig[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;