/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/**
 * Middleware function that verifies if x-access-token is valid.
 * @param request 
 * @param response 
 * @param next 
 * @returns 
 */
export default function verifyJWT(request: Request, response: Response, next: Function) {
  const token = request.headers['x-access-token'];
  if (!token) return response.status(401).json({ message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return response.status(500).json({ message: 'Could not validate token.' });
    // Save the requesting user ID on the request headers
    request.headers['user-id'] = decoded.id;
    next();
  });
}