import { Component, DiscordMessage, Embed } from '#lib/types/discord';

const createMessage = {
  messageObject: {
    username: '',
    avatarUrl: '',
    content: '',
    tts: false,
    embeds: [],
    components: [],
  } as DiscordMessage,
  setUsername(username: string | null = null): void {
    this.messageObject.username = username ?? '';
  },
  setAvatarUrl(avatarUrl: string | null = null): void {
    this.messageObject.avatarUrl = avatarUrl ?? '';
  },
  setContent(content: string | null = null): void {
    this.messageObject.content = content ?? '';
  },
  isTTS(isTTs = false): void {
    this.messageObject.tts = isTTs;
  },
  appendEmbed(embed: Embed): void {
    this.messageObject.embeds.push(embed);
  },
  appendComponent(component: Component): void {
    this.messageObject.components.push(component);
  },
};

export {
  createMessage,
};
