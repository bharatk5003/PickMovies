import { Module } from "@nestjs/common";
import { RouterModule ,Routes} from "@nestjs/core";
import { MovieModule } from "./main/movie/movie.module";

const routes: Routes=[
{
    path:'movie',
    module: MovieModule
}

];

@Module({
    imports: [RouterModule.register(routes)],
    controllers:[],
    providers:[],
})

export class AppRoutingModule {};
