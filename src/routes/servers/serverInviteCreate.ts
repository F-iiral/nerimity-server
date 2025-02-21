import { Request, Response, Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { rateLimit } from '../../middleware/rateLimit';
import { serverMemberVerification } from '../../middleware/serverMemberVerification';
import { createServerInvite } from '../../services/ServerInvite';

export function serverInviteCreate(Router: Router) {
  Router.post('/servers/:serverId/invites', 
    authenticate(),
    serverMemberVerification(),
    rateLimit({
      name: 'create_server_invite',
      expireMS: 20000,
      requestCount: 5,
    }),
    route
  );
}



async function route (req: Request, res: Response) {

  const [invite, error] = await createServerInvite(req.serverCache.id, req.accountCache.user.id);

  if (error) {
    return res.status(403).json(error);
  }

  res.json(invite);

}