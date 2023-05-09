import { IKImage, IKContext } from "imagekitio-react";
import { FunctionComponent } from "react";

interface ImageProps {
  imagePath: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Image: FunctionComponent<ImageProps> = ({
  imagePath,
  width = "288",
  height = "224",
  borderRadius = ".5rem .5rem 0 0",
}) => {
  const URL_ENDPOINT = "https://ik.imagekit.io/levyaraujo";
  return (
    <IKContext urlEndpoint={URL_ENDPOINT}>
      <IKImage
        path={imagePath}
        lqip={{ active: true }}
        style={{ borderRadius: borderRadius }}
        loading="lazy"
        transformation={[
          {
            width,
            height,
            quality: "100",
          },
        ]}
      />
    </IKContext>
  );
};
