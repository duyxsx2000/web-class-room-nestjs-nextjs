import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { Role } from './role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {} 
  
  canActivate(context: ExecutionContext): boolean {
    // Retrieves the required roles from metadata
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
        
    if (!requiredRoles) {
      return true;
    };

    // Get the request and user from the context
    const request = context.switchToHttp().getRequest();
    const user = request['user'];
       
    // Check if the user has at least one of the required roles
    return requiredRoles.some((role) => user?.roles?.includes(role));
  }
}