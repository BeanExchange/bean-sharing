import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('position')
export class PositionController {
  @Get(':id')
  getHtmlPage(@Param('id') id: string, @Res() res: Response) {
    // Assuming the image is accessible via /uploads/{id}
    const imageUrl = `/uploads/${id}`;

    // Simple HTML page with the image link
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Image Viewer</title>
      </head>
      <body>
        <h1>Image ID: ${id}</h1>
        <p>Here is the image you uploaded:</p>
        <img src="${imageUrl}" alt="Uploaded Image" />
        <p><a href="${imageUrl}">Download Image</a></p>
      </body>
      </html>
    `;

    // Set the response content type to HTML and return the HTML content
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
  }
}
