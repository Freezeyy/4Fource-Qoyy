# Strapi Integration Guide

This guide will help you connect your React frontend to your Strapi 5 backend so that CMS changes are reflected in real-time.

## 🚀 Quick Start

### 1. Start Strapi Backend

```bash
cd strapi-backend
npm install
npm run develop
```

Strapi will start at `http://localhost:1337`

### 2. Access Strapi Admin Panel

- Open `http://localhost:1337/admin` in your browser
- Create your first admin user
- Complete the initial setup

### 3. Create API Token

1. Go to **Settings** → **API Tokens**
2. Click **Create new API Token**
3. Set:
   - **Name**: `Frontend Access`
   - **Description**: `Token for frontend to access CMS data`
   - **Token duration**: `Unlimited`
   - **Token type**: `Full access`
4. Copy the generated token

### 4. Update Frontend Configuration

1. Open `src/config/strapi.js`
2. Replace `API_TOKEN: ''` with your actual token:
   ```javascript
   API_TOKEN: 'your_actual_token_here',
   ```

### 5. Start Frontend

```bash
cd 4Fource-Qoyy
npm install
npm run dev
```

Frontend will start at `http://localhost:5173`

## 📝 Content Management

### Adding Content to Pages

1. **Home Page**:
   - Go to **Content Manager** → **Home**
   - Click **Create new entry**
   - Fill in title, subtitle, description, and upload image
   - Click **Save** and **Publish**

2. **About Page**:
   - Go to **Content Manager** → **About**
   - Create and publish content

3. **Service Page**:
   - Go to **Content Manager** → **Service Page**
   - Create and publish content

4. **Info Page**:
   - Go to **Content Manager** → **Info**
   - Create and publish content

5. **Contact Page**:
   - Go to **Content Manager** → **Contact**
   - Create and publish content

### Real-time Updates

- Any changes you make in Strapi will be immediately reflected in your frontend
- Images are automatically served from Strapi's media library
- Rich text content supports HTML formatting

## 🔧 Configuration Options

### Strapi Backend Settings

- **Port**: Default is 1337 (configurable in `config/server.ts`)
- **Database**: SQLite by default (can be changed to PostgreSQL, MySQL, etc.)
- **CORS**: Enabled for frontend access
- **File Upload**: Local storage (can be changed to cloud storage)

### Frontend Settings

- **API Base URL**: Configurable in `src/config/strapi.js`
- **Authentication**: Bearer token authentication
- **Fallback**: Mock data when API is unavailable
- **Error Handling**: Graceful fallbacks with user notifications

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Ensure Strapi is running on port 1337
   - Check that CORS middleware is enabled
   - Verify frontend URL in CORS settings

2. **Authentication Errors**:
   - Verify API token is correct
   - Check token hasn't expired
   - Ensure token has proper permissions

3. **Content Not Loading**:
   - Check Strapi admin panel for published content
   - Verify API endpoints are correct
   - Check browser console for error messages

4. **Images Not Displaying**:
   - Ensure images are uploaded to Strapi media library
   - Check image permissions and access
   - Verify image URLs are correct

### Debug Mode

Enable debug logging in your browser console to see:
- API requests and responses
- Data transformation steps
- Error details and fallback behavior

## 🔄 Advanced Features

### Custom Fields

You can extend the content types with additional fields:
- **Text fields**: Short text, long text, rich text
- **Media fields**: Images, videos, documents
- **Relation fields**: Connect different content types
- **Component fields**: Reusable content blocks

### Webhooks

Set up webhooks to trigger actions when content changes:
- **Content published**: Send notifications
- **Content updated**: Update cache
- **Content deleted**: Clean up related data

### API Extensions

Customize API responses and add business logic:
- **Controllers**: Custom API endpoints
- **Services**: Business logic layer
- **Middlewares**: Request/response processing
- **Policies**: Access control rules

## 📚 API Reference

### Endpoints

- `GET /api/home` - Home page content
- `GET /api/about` - About page content
- `GET /api/service-pages` - Service page content
- `GET /api/info` - Info page content
- `GET /api/contact` - Contact page content

### Query Parameters

- `populate=*` - Include all relations (images, etc.)
- `fields=title,subtitle` - Select specific fields
- `sort=createdAt:desc` - Sort results

### Response Format

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Page Title",
      "subtitle": "Page Subtitle",
      "description": "Page content...",
      "image": {
        "data": {
          "attributes": {
            "url": "/uploads/image.jpg"
          }
        }
      }
    }
  }
}
```

## 🎯 Next Steps

1. **Customize Content Types**: Add more fields and content types
2. **Implement Search**: Add search functionality across content
3. **Add Authentication**: Implement user login/registration
4. **Optimize Performance**: Add caching and optimization
5. **Deploy**: Deploy both frontend and backend to production

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Strapi documentation
3. Check browser console for errors
4. Verify network requests in browser dev tools

---

Happy coding! 🚀
