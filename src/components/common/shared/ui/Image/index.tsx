export default function Image({
  src,
  width,
  height,
  children,
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <div
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
