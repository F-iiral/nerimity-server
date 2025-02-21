const PREFIX = 'NERIMITY_';
export const ACCOUNT_CACHE_KEY_STRING = (userId: string) => `${PREFIX}ACCOUNT:${userId}`;



export const GOOGLE_ACCESS_TOKEN = (userId: string) => `${PREFIX}GOOGLE_ACCESS_TOKEN:${userId}`;

export const SERVER_KEY_STRING = (serverId: string) => `${PREFIX}SERVER:${serverId}`;

export const SERVER_CHANNEL_KEY_STRING = (channelId: string) => `${PREFIX}SERVER_CHANNEL:${channelId}`;
export const DM_CHANNEL_KEY_STRING = (channelId: string) => `${PREFIX}DM_CHANNEL:${channelId}`;
export const INBOX_KEY_STRING = (channelId: string, userId: string) => `${PREFIX}INBOX:${userId}:${channelId}`;

export const SERVER_MEMBERS_KEY_HASH = (serverId: string) => `${PREFIX}SERVER_MEMBERS:${serverId}`;


export const CONNECTED_SOCKET_ID_KEY_SET = (userId: string) => `${PREFIX}SOCKET_USER_CONNECTED:${userId}`;
export const CONNECTED_USER_ID_KEY_STRING = (socketId: string) => `${PREFIX}SOCKET_USER_ID:${socketId}`;

export const VOICE_USERS_KEY_HASH = (channelId: string) => `${PREFIX}VOICE_USERS:${channelId}`
export const VOICE_USER_CHANNEL_ID_SET = (userId: string) => `${PREFIX}VOICE_USER_CHANNEL_ID:${userId}`

export const USER_PRESENCE_KEY_STRING = (userId: string) => `${PREFIX}USER_PRESENCE:${userId}`;


export const RATE_LIMIT_KEY_STRING = (id: string) => `${PREFIX}RATE_LIMIT:${id}`;

export const BANNED_IP_KEY_SET = () => `${PREFIX}ALLOWED_IP`;