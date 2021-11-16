import {
  ColorResolvable,
  Embed,
  EmbedAuthor,
  EmbedField,
  EmbedFooter,
  EmbedImage,
  EmbedThumbnail,
  EmbedVideo,
} from '#/lib/types/discord';
import { Util } from '#/lib/util/Util';

export class MessageEmbed implements Embed {
  title?: string | null;
  color?: ColorResolvable | null;
  description?: string | null;
  timestamp?: Date | number | null;
  url?: string | null;
  fields?: EmbedField[] | null = [];
  author?: EmbedAuthor | null;
  thumbnail?: EmbedThumbnail | null;
  image?: EmbedImage | null;
  video?: EmbedVideo | null;
  footer?: EmbedFooter | null;

  constructor(data: MessageEmbed | Embed) {
    this.title = data.title ?? null;

    this.description = data.description ?? null;

    this.url = data.url ?? null;

    // @ts-expect-error: it exists bub
    this.color = 'color' in data ? Util.resolveColor(data.color) : null;

    // @ts-expect-error: it exists bub
    this.timestamp = 'timestamp ' in data ? new Date(data.timestamp) : null;

    this.fields = data.fields?.map(Util.cloneObject) as EmbedField[];

    this.thumbnail = data.thumbnail ?? null;

    this.image = data.image ?? null;

    this.video = data.video ?? null;

    this.author = data.author ?? null;

    this.footer = data.footer ?? null;
  }

  get createdAt() {
    return this.timestamp ? new Date(this.timestamp) : null;
  }

  get colorHex() {
    return this.color ? `#${this.color.toString(16).padStart(6, '0')}` : null;
  }

  addField(field: EmbedField) {
    this.fields?.push(field);

    return this;
  }

  setAuthor(author: EmbedAuthor) {
    this.author = {
      ...author,
      name: Util.checkString(author.name),
    };

    return this;
  }

  setDescription(description: string) {
    this.description = Util.checkString(description);

    return this;
  }

  setFooter(footer: EmbedFooter) {
    this.footer = {
      ...footer,
      text: Util.checkString(footer.text),
    };

    return this;
  }

  setImage(url: string) {
    this.image = { url };

    return this;
  }

  setThumbnail(url: string) {
    this.thumbnail = { url };

    return this;
  }

  setTimestamp(timestamp: unknown = Date.now()) {
    if (timestamp instanceof Date) {
      timestamp = timestamp.getTime;
    }

    this.timestamp = timestamp as number;

    return this;
  }

  setTitle(title: string) {
    this.title = Util.checkString(title);

    return this;
  }

  setURL(url: string) {
    this.url = url;

    return this;
  }

  json() {
    // apparently types are deprecated according to discord docs or smth
    return {
      title: this.title,
      type: 'rich',
      description: this.description,
      url: this.url,
      timestamp: this.timestamp && new Date(this.timestamp),
      color: this.color,
      fields: this.fields,
      thumbnail: this.thumbnail,
      image: this.image,
      author: this.author && {
        name: this.author.name,
        url: this.author.url,
        icon_url: this.author.iconUrl,
      },
      footer: this.footer && {
        text: this.footer.text,
        icon_url: this.footer.iconUrl,
      },
    };
  }
}
