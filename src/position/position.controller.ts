import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('position')
export class PositionController {
  @Get(':id')
  getHtmlPage(@Param('id') id: string, @Res() res: Response) {
    // Assuming the image is accessible via /uploads/{id}
    const imageUrl = `/public/${id}`;
    const pageTitle = `Bean Exchange`;
    const pageDescription = `Experience hyper on-chain trading UX: spot or perpetual contracts on hundreds of asset pairs with leverage up to 50x`;
    const redirectUrl = process.env.INTERFACE_URL;
    // Simple HTML page with the image link
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${pageTitle}</title>
        <meta charset="UTF-8">
        <meta name="description" content="${pageDescription}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Open Graph meta tags for Facebook -->
        <meta property="og:title" content="${pageTitle}">
        <meta property="og:description" content="${pageDescription}">
        <meta property="og:image" content="${imageUrl}">
        <meta property="og:image:alt" content="Uploaded Image">
        <meta property="og:url" content="${imageUrl}">
        
        <!-- Twitter Card meta tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${pageTitle}">
        <meta name="twitter:description" content="${pageDescription}">
        <meta name="twitter:image" content="${imageUrl}">
        <meta name="twitter:image:alt" content="Uploaded Image">
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/favicon.ico">
        
        <!-- Meta Refresh for redirect -->
        <meta http-equiv="refresh" content="0;url=${redirectUrl}"> 
      </head>
      </html>
    `;

    // Set the response content type to HTML and return the HTML content
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
  }
}
