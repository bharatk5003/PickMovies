import { Post,Req,Get, Controller } from "@nestjs/common";

@Controller({
    version:'1',
})
export class MovieController{


    @Post('createMovie')
    async postMovie(@Req() req: any){
        
              
    }

    @Get('getMovie')
    async getMovie(@Req() req: any){
        console.log("hello Bharat");
      return "hello Bharat";
    }

}