import { BLUR_IMAGE } from "@/assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const LazyImage = ({
  src = "",
  errorImage = BLUR_IMAGE,
  className,
  wrapperClassName = "w-full h-full",
}: {
  src?: string;
  className?: string;
  wrapperClassName?: string;
  errorImage?: string;
}) => (
  <span className="flex h-full w-full items-center justify-center overflow-hidden">
    <LazyLoadImage
      wrapperClassName={wrapperClassName}
      effect="blur"
      className={`h-full w-full ${className} select-none`}
      src={src}
      onError={(event) => {
        (event.target as HTMLImageElement).src = errorImage;
      }}
    />
  </span>
);
