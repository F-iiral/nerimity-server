import { Request, Response, Router } from 'express';
import { authenticate } from '../../middleware/authenticate';
import { rateLimit } from '../../middleware/rateLimit';
import { createApplication } from '../../services/Application';
import { generateError } from '../../common/errorHandler';

export function applicationsCreate(Router: Router) {
  Router.post(
    '/applications',
    authenticate(),
    rateLimit({
      name: 'create-app',
      expireMS: 60000,
      requestCount: 2,
    }),
    route
  );
}

async function route(req: Request, res: Response) {
  if (!req.accountCache.emailConfirmed) {
    return res
      .status(403)
      .json(generateError('You must confirm your email first.'));
  }

  const [application, error] = await createApplication(req.accountCache.id);

  if (error) {
    return res.status(400).json(error);
  }

  res.json(application);
}
