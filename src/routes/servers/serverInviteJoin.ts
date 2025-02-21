import { Request, Response, Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { joinServerByInviteCode } from '../../services/ServerInvite';
import { rateLimit } from '../../middleware/rateLimit';

export function serverInviteJoin(Router: Router) {
  Router.post('/servers/invites/:inviteCode',
    authenticate(),
    rateLimit({
      name: 'server_join',
      expireMS: 60000,
      requestCount: 3,
    }),
    route
  );
}



async function route(req: Request, res: Response) {
  const { inviteCode } = req.params;
  const [server, error] = await joinServerByInviteCode(req.accountCache.user.id, inviteCode);
  if (error) {
    return res.status(400).json(error);
  }
  res.json(server);
}