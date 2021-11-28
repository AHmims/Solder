export type EmbedField = {
  name: string;
  value: string;
  inline?: boolean;
}

export type EmbedFooter = {
  text?: string;
  iconUrl?: string;
}

export type EmbedThumbnail = {
  url?: string;
}

export type EmbedImage = {
  url?: string;
}

export type EmbedAuthor = {
  name: string;
  url?: string;
  iconUrl?: string;
}

export interface MinifiedEmbed {
  title?: string;
  color: ColorResolvable;
  description?: string;
  timestamp: Date;
  url?: string;
  author: EmbedAuthor;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  footer?: EmbedFooter;
}

export interface Embed {
  title: string | undefined;
  color: ColorResolvable;
  description: string | undefined;
  timestamp: Date;
  url: string | undefined;
  author: EmbedAuthor;
  image: EmbedImage | undefined;
  thumbnail: EmbedThumbnail | undefined;
  footer: EmbedFooter | undefined;
  fields: EmbedField[];
}

export interface SubComponent {
  'type': number;
  style: number;
  label: string;
  url?: string;
  customId?: string;
}

export interface MinifiedComponent {
  'type': number;
}

export interface Component {
  'type': number;
  components: SubComponent[];
}

export interface MinifiedDiscordMessage {
  username: string;
  avatarUrl: string;
  content: string;
  tts?: boolean;
}

export interface DiscordMessage {
  username: string;
  avatarUrl: string;
  content: string;
  tts?: boolean;
  embeds: Embed[];
  components: Component[];
}

export type ColorResolvable =
  'DEFAULT'
  | 'WHITE'
  | 'GREEN'
  | 'BLUE'
  | 'ORANGE'
  | 'RED'
  | 'QUASI_BLACK'
  | 'RANDOM'
  | 'PURPLE'
  | string
  | number
  | number[];
