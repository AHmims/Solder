import { EmbedImage } from '#lib/types/discord';

class EmbedImageBuilder {
  private _embedImageObject: EmbedImage;

  constructor() {
    this._embedImageObject = {
      url: '',
    };
  }

  setUrl(url: string | null = null) {
    this._embedImageObject.url = url ?? '';

    return this;
  }

  build(): EmbedImage {
    return this._embedImageObject;
  }

  /**
   * Getter & setter
   */
  get embedImageObject(): EmbedImage {
    return this._embedImageObject;
  }

  set embedImageObject(value: EmbedImage) {
    this._embedImageObject = value;
  }
}

const prepareEmbedImage = (): EmbedImageBuilder => {
  return new EmbedImageBuilder();
};

export {
  prepareEmbedImage,
};
