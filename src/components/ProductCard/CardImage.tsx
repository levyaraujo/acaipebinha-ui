import { IKImage, IKContext } from "imagekitio-react";
import { FunctionComponent } from "react";

interface ImageProps {
  imagePath: string;
}

export const Image: FunctionComponent<ImageProps> = ({ imagePath }) => {
  const URL_ENDPOINT = "https://ik.imagekit.io/levyaraujo";
  return (
    <IKContext urlEndpoint={URL_ENDPOINT}>
      <IKImage
        path={imagePath}
        lqip={{ active: true }}
        style={{ borderRadius: ".5rem .5rem 0 0" }}
        loading="lazy"
        transformation={[
          {
            width: "288",
            height: "224",
            quality: "100",
          },
        ]}
      />
    </IKContext>
  );
};
