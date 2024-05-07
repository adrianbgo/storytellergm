import Image from "next/image";
import React, { PropsWithChildren } from "react";
import styles from "./index.module.css";

interface IImageWrapper {
  src: string;
  alt: string;
}

const ImageWrapper: React.FC<PropsWithChildren<IImageWrapper>> = ({
  src,
  alt,
  children,
}) => {
  return (
    <div data-testid="imageWrapper" className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={src}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: -10000 }}
      />
      {children}
    </div>
  );
};

export default ImageWrapper;
