import { EmbedAuthor } from '#lib/types/discord';

class EmbedAuthorBuilder {
  private _embedAuthorObject: EmbedAuthor;

  constructor() {
    this._embedAuthorObject = {
      name: '',
      url: '',
      iconUrl: '',
    };
  }

  setName(name: string | null = null) {
    this._embedAuthorObject.name = name ?? '';

    return this;
  }

  setUrl(url: string | null = null) {
    this._embedAuthorObject.url = url ?? '';

    return this;
  }

  setIconUrl(iconUrl: string | null = null) {
    this._embedAuthorObject.iconUrl = iconUrl ?? '';

    return this;
  }

  build(): EmbedAuthor {
    return this._embedAuthorObject;
  }

  /**
   * Getter & setter
   */
  get embedAuthorObject(): EmbedAuthor {
    return this._embedAuthorObject;
  }

  set embedAuthorObject(value: EmbedAuthor) {
    this._embedAuthorObject = value;
  }
}

const prepareEmbedAuthor = (): EmbedAuthorBuilder => {
  return new EmbedAuthorBuilder();
};

export default prepareEmbedAuthor;
