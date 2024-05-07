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
        fill
        quality={100}
        // width={10000}
        // height={10000}
        style={{ objectFit: "cover", zIndex: -10000 }}
      />
      <div className={styles.textWrapper}>{children}</div>
    </div>
  );
};

export default ImageWrapper;
