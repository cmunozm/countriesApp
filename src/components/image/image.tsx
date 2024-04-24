type imageProps = {
  /**Image Url*/
  src: string;
  /**alternative text */
  alt: string;
  /**image container class */
  variant: string;
};

/**Image component */
const Image = ({ src, alt, variant }: imageProps) => {
  return (
    <div className={variant}>
      <img src={src} alt={alt} loading='lazy' />
    </div>
  );
};

export default Image;
