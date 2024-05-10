import { Module } from "@nestjs/common";
import { MovieController } from "./movie.controller";
import { MovieService } from "./movie.service";
import { AppModule } from "src/app.module";


@Module({
    imports: [],
    controllers: [MovieController],
    providers: [MovieService]
})

export class MovieModule {}