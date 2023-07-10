import { Request, Response } from 'express';

export type ExpressCallback = (httpRequest: any) => Promise<any>;

export default (controller: ExpressCallback) => async (req: Request, res: Response) => {
  try {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      source: {
        ip: req.ip,
        browser: req.get('User-Agent')
      },
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent'),
        Authorization: req.get('Authorization')
      }
    };

    const httpResponse = await controller(httpRequest);

    res.set('Content-Type', 'application/json');
    res.type('json');
    const body = {
      success: true,
      code: 200,
      data: httpResponse
    };
    res.status(200).send(body);
  } catch (e: any) {
    const status = e.statusCode || 500;
    res.status(status).send({
      success: false,
      code: status,
      error: {
        description: e.message
      }
    });
  }
};
