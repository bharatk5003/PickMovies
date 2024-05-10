import { Module } from '@nestjs/common';
import { MovieModule } from './main/movie/movie.module';
import { AppRoutingModule } from './app-routing.module';



@Module({
  imports: [
    MovieModule,
    AppRoutingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
