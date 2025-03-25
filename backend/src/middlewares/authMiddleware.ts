import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extiende JwtPayload con la propiedad userId
interface CustomJwtPayload extends JwtPayload {
  userId: string; // Define el tipo de userId
}

const JWT_SECRET = process.env.JWT_SECRET || 'mysecret';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtén el token del encabezado

  if (!token) {
    res.status(401).json({ message: 'Acceso no autorizado' });
  }else{
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) res.status(403).json({ message: 'Token no válido' });
  
      // Asegurarse de que decoded es un objeto y no un string
      if (typeof decoded === 'object' && decoded !== null) {
        const payload = decoded as CustomJwtPayload;
        
        req.body.userId = payload.userId; // Accede a userId y lo agrega al body de la solicitud
  
        next(); // Continúa con la siguiente función de middleware
      } else {
        res.status(403).json({ message: 'Token no válido' });
      }
    });
  }  
};