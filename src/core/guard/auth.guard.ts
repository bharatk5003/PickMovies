import { Injectable,CanActivate,ExecutionContext, BadRequestException } from "@nestjs/common";
import { Observable } from "rxjs";
import { CONSTANT } from "src/utils/constant.utils";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }

  validateRequest(request: any){
    try {
        let condition: any ={is_active :true};

        if(request.headers['internal']){
            if(request.headers['access-key']!== CONSTANT['ACCESS_KEY'])
            {
                return false;
            }
            condition.backend_user_id=request.headers?.['backend-user-id'];
        }else{
            if(!request.headers.authorization)
             throw new BadRequestException ('Please Send Authorization Token');
            const token =request.headers.authorization.split(' ')[1];


        }
        
    } catch (error) {
        
    }
  }

}