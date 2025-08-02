export default function Image({
  src,
  width,
  height,
  children,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div
      {...props}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width,
        height,
      }}
      role="img"
    >
      {children}
    </div>
  );
}
