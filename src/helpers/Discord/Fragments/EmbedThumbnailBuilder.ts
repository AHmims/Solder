import { EmbedThumbnail } from '#lib/types/discord';

class EmbedThumbnailBuilder {
  private _embedThumbnailObject: EmbedThumbnail;

  constructor() {
    this._embedThumbnailObject = {
      url: '',
    };
  }

  setUrl(url: string | null = null) {
    this._embedThumbnailObject.url = url ?? '';

    return this;
  }

  build(): EmbedThumbnail {
    return this._embedThumbnailObject;
  }

  /**
   * Getter & setter
   */
  get embedThumbnailObject(): EmbedThumbnail {
    return this._embedThumbnailObject;
  }

  set embedThumbnailObject(value: EmbedThumbnail) {
    this._embedThumbnailObject = value;
  }
}

const prepareEmbedThumbnail = (): EmbedThumbnailBuilder => {
  return new EmbedThumbnailBuilder();
};

export default prepareEmbedThumbnail;
