export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
};

export type EmbedFooter = {
  text?: string;
  iconUrl?: string;
};

export type EmbedThumbnail = {
  url?: string;
  height?: number;
  width?: number;
};

export type EmbedImage = {
  url?: string;
  height?: number;
  width?: number;
};

export type EmbedAuthor = {
  name?: string;
  url?: string;
  iconUrl?: string;
};

export type EmbedVideo = {
  url: string;
  proxyURL: string;
  height: number;
  width: number;
};

export interface Embed {
  title?: string | null;
  color?: ColorResolvable | null;
  description?: string | null;
  timestamp?: Date | number | null;
  url?: string | null;
  fields?: EmbedField[] | null;
  author?: EmbedAuthor | null;
  thumbnail?: EmbedThumbnail | null;
  image?: EmbedImage | null;
  video?: EmbedVideo | null;
  footer?: EmbedFooter | null;
}

export interface SubComponent {
  type: number;
  style: number;
  label: string;
  url?: string;
  customId?: string;
}

export interface Component {
  type: number;
  components: SubComponent[];
}

export interface DiscordMessage {
  username: string;
  avatarUrl: string;
  content: string;
  tts?: boolean;
  embeds: Embed[];
  components: Component[];
}

export type ColorResolvable = string | number | number[];
