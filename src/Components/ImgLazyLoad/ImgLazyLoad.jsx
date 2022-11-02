import { useState } from "react";
import { Blurhash } from "react-blurhash";

function ImgLazyLoad({ imageUrl, title, hash, height = 250 }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <div style={{ display: loaded ? "block" : "none" }}>
        <img
          src={imageUrl}
          alt={title}
          width={"100%"}
          height={""}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="h-full w-full">
        {!loaded && (
          <Blurhash
            hash={hash}
            width="100%"
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
      </div>
    </div>
  );
}

export { ImgLazyLoad };
