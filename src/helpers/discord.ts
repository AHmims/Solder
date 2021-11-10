import { Component, DiscordMessage, Embed } from '#lib/types/discord';

const x_messageBuilder = {
  messageObject: {
    username: '',
    avatarUrl: '',
    content: '',
    tts: false,
    embeds: [],
    components: [],
  } as DiscordMessage,
  prepareMessage() {
    return Object.assign({}, messageBuilder);
  },
  setUsername(username: string | null = null) {
    this.messageObject.username = username ?? '';

    return this;
  },
  setAvatarUrl(avatarUrl: string | null = null) {
    this.messageObject.avatarUrl = avatarUrl ?? '';

    return this;
  },
  setContent(content: string | null = null) {
    this.messageObject.content = content ?? '';

    return this;
  },
  isTTS(isTTs = false) {
    this.messageObject.tts = isTTs;

    return this;
  },
  appendEmbed(embed: Embed) {
    this.messageObject.embeds.push(embed);

    return this;
  },
  appendComponent(component: Component) {
    this.messageObject.components.push(component);

    return this;
  },
};


export {
  x_messageBuilder,
};
