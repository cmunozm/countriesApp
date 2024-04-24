type imageProps = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: imageProps) => {
  return <img src={src} alt={alt} loading='lazy' />;
};

export default Image;
