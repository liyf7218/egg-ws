# Introductions for plugins

## egg-multipart

[github/egg-multipart](https://github.com/eggjs/egg-multipart)

Whitelist of file extensions

For security, if uploading file extension is not in white list, will response as 400 Bad request.

Default Whitelist:

```
const whitelist = [
  // images
  '.jpg', '.jpeg', // image/jpeg
  '.png', // image/png, image/x-png
  '.gif', // image/gif
  '.bmp', // image/bmp
  '.wbmp', // image/vnd.wap.wbmp
  '.webp',
  '.tif',
  '.psd',
  // text
  '.svg',
  '.js', '.jsx',
  '.json',
  '.css', '.less',
  '.html', '.htm',
  '.xml',
  // tar
  '.zip',
  '.gz', '.tgz', '.gzip',
  // video
  '.mp3',
  '.mp4',
  '.avi',
];
```
