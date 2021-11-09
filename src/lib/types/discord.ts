export type EmbedField = {
  name: string,
  value: string,
  inline?: boolean
}

export type EmbedFooter = {
  text?: string,
  iconUrl?: string,
}

export type EmbedThumbnail = {
  url?: string,
}

export type EmbedImage = {
  url?: string,
}

export type EmbedAuthor = {
  name?: string,
  url?: string,
  iconUrl?: string,
}

export interface Embed {
  title?: string,
  color: number,
  description?: string,
  timestamp: Date,
  url?: string,
  author: EmbedAuthor,
  image: EmbedImage,
  thumbnail: EmbedThumbnail,
  footer: EmbedFooter,
  fields: EmbedField[],
}

export interface SubComponent {
  'type': number,
  style: number
  label: string,
  url?: string,
  customId?: string
}

export interface Component {
  'type': number,
  components: SubComponent[]
}

export interface DiscordMessage {
  username: string,
  avatarUrl: string,
  content: string,
  tts?: boolean,
  embeds: Embed[],
  components: Component[]
}
