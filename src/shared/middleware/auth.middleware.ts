// import { NextFunction, Request, Response } from 'express';
// import { config, httpClient, User } from '@shared/index';
// import logger from '@shared/utils/logger';
// import { ErrorHTTP } from '@shared/interface/httpClient.interface';

// async function authMiddleware(req: Request, res: Response, next: NextFunction) {
//   try {
//     const token = req.cookies.access_token;

//     if (!token) {
//       logger.debug('No access token found in cookies.');
//       return refreshTokenAndProceed(req, res, next);
//     }
//     const decodedToken = await verifyToken(token);
//     if (!decodedToken) {
//       logger.debug('Access token is invalid or expired.');
//       return refreshTokenAndProceed(req, res, next);
//     }
//     // req.body.user = decodedToken as User;
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// async function refreshTokenAndProceed(req: Request, res: Response, next: NextFunction) {
//   try {
//     let refreshToken = req.cookies.refresh_token;
//     if (!refreshToken) {
//       const authHeader = req.headers.authorization;
//       if (authHeader && authHeader.startsWith('Bearer ')) {
//         refreshToken = authHeader.substring(7);
//       }
//     }
//     if (!refreshToken) throw new ErrorHTTP(401, 'missing_refresh_token');

//     const newTokenData = await getNewAccessToken(refreshToken);
//     if (!newTokenData) throw new ErrorHTTP(401, 'failed_to_refresh_token');

//     res.cookie('access_token', newTokenData.access_token, {
//       maxAge: newTokenData.expires_in * 1000,
//       httpOnly: true,
//       // secure: true
//     });

//     const decodedToken = await verifyToken(newTokenData.access_token);
//     if (!decodedToken) {
//       throw new ErrorHTTP(401, 'failed_to_verify_token');
//     }
//     // req.body.user = decodedToken as User;
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// async function verifyToken(token: string): Promise<User | null> {
//   try {
//     const urlBase = config.Oauth.URL_Token_Verify + token;
//     const response = await httpClient.get<any, User>(urlBase);
//     if (response && response.aud === config.PHOTOS_DATA.client_id) {
//       return response;
//     }
//     return null;
//   } catch (error) {
//     logger.error('Error verifying token with Google:', error);
//     throw error;
//   }
// }

// async function getNewAccessToken(refreshToken: string) {
//   const urlBase = config.Oauth.URL_Token;
//   const params = {
//     client_id: config.PHOTOS_DATA.client_id,
//     client_secret: config.PHOTOS_DATA.client_secret,
//     refresh_token: refreshToken,
//     grant_type: 'refresh_token',
//   };
//   const result = await httpClient.post<typeof params, any>(urlBase, params);
//   return result;
// }
const authMiddleware = '';
export { authMiddleware };
