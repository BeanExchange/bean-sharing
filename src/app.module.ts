import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PositionController } from './position/position.controller';
import { PositionModule } from './position/position.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Serve files from the uploads directory
      serveRoot: '/images', // Access images via /images/filename.jpg
    }),
    UploadModule,
    PositionModule,
  ],
  controllers: [AppController, PositionController],
  providers: [AppService],
})
export class AppModule {}
