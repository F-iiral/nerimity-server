import { Router } from 'express';
import { serverChannelCreate } from './serverChannelCreate';
import { serverChannelDelete } from './serverChannelDelete';
import { serverChannelUpdate } from './serverChannelUpdate';
import { serverCreate } from './serverCreate';
import { serverInviteCreate } from './serverInviteCreate';
import { serverInviteDetails } from './serverInviteDetails';
import { serverInviteJoin } from './serverInviteJoin';
import { serverInvites } from './ServerInvites';
import { serverUpdate } from './serverUpdate';
import { serverRoleCreate } from './serverRoleCreate';
import { serverRoleUpdate } from './serverRoleUpdate';
import { serverMemberUpdate } from './serveMemberUpdate';
import { serverRoleDelete } from './serverRoleDelete';
import { serverMemberKick } from './serverMemberKick';
import { serverMemberBan } from './serverMemberBan';
import { serverMemberBanList } from './serverMemberBanList';
import { serverMemberBanRemove } from './serverMemberBanRemove';
import { serverInviteCustomCreate } from './serverInviteCustomCreate';
import { serverRoleUpdateOrder } from './serverRoleUpdateOrder';
import { serverUpdateOrder } from './serverUpdateOrder';
import { serverChannelUpdateOrder } from './serverChannelUpdateOrder';
import { serverEmojiAdd } from './serverEmojiAdd';
import { serverEmojisGet } from './serverEmojisGet';
import { serverEmojiUpdate } from './serverEmojiUpdate';
import { serverEmojiDelete } from './serverEmojisDelete';
import { serverInviteDelete } from './serverInviteDelete';
import { serverLeave } from './serverLeave';
import { serverDelete } from './serverDelete';
import { serverChannelNoticeDelete } from './ServerChannelNoticeDelete';
import { serverChannelNoticeUpdate } from './ServerChannelNoticeUpdate';


const ServersRouter = Router();



serverChannelNoticeDelete(ServersRouter);
serverChannelNoticeUpdate(ServersRouter);

serverChannelUpdateOrder(ServersRouter);
serverUpdateOrder(ServersRouter);
serverCreate(ServersRouter);
serverDelete(ServersRouter);
serverLeave(ServersRouter);
serverUpdate(ServersRouter);

serverInviteJoin(ServersRouter);
serverInviteDetails(ServersRouter);
serverInviteCreate(ServersRouter);
serverInviteDelete(ServersRouter);
serverInviteCustomCreate(ServersRouter);
serverInvites(ServersRouter);

serverChannelCreate(ServersRouter);
serverRoleUpdateOrder(ServersRouter);
serverChannelUpdate(ServersRouter);
serverChannelDelete(ServersRouter);

serverRoleCreate(ServersRouter);
serverRoleUpdate(ServersRouter);
serverRoleDelete(ServersRouter);

serverMemberUpdate(ServersRouter);
serverMemberKick(ServersRouter);
serverMemberBan(ServersRouter);
serverMemberBanList(ServersRouter);
serverMemberBanRemove(ServersRouter);

serverEmojiAdd(ServersRouter);
serverEmojisGet(ServersRouter);
serverEmojiUpdate(ServersRouter);
serverEmojiDelete(ServersRouter);

export { ServersRouter };
