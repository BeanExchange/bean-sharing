import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs for the images

@Controller('upload')
export class UploadController {
  @Post('photo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Folder where images will be saved
        filename: (req, file, callback) => {
          // Create a unique filename with original extension
          const fileExt = extname(file.originalname);
          const filename = `${uuidv4()}${fileExt}`; // e.g., '123e4567-e89b-12d3-a456-426614174000.jpg'
          callback(null, filename);
        },
      }),
    }),
  )
  uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'Photo uploaded successfully',
      id: file.filename, // Return the filename (unique ID) as the identifier
    };
  }
}
