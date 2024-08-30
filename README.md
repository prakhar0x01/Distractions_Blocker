# Distractions_Blocker
Simple browser extension for secure site access (protect from physical access) and prevention from social media distractions.

## How to Add this extension

```cmd
git clone https://github.com/prakhar0x01/Distractions_Blocker.git
```

- Navigate to **chrome://extensions/**
- Click **`Load Unpacked`** & select the folder **`Distractions_Blocker`**

### Explore

- Prevent users from physical access to sites.
<img src=images/prompt.png>

***

- Remind the user at intervals of every `"n"` minutes to prevent procrastination.
<img src=images/confirm.png>

### Changes in Extension

- If you want to manage its permissions or sites you want to `add/remove`. `Add/remove` the site in the `manifest.json` file as :

```json
"content_scripts": [
    {
      "matches": ["*://*.site1.com/*","*://*.site2.com/*","*://*.site3.com/*"]
    }
```

- The **default password** for accessing protected sites: **`LETMEIN`**
- Or if you want to change the password, you can change from `content.js` & change the value of `accessCode`

```javascript
const accessCode = '{YOUR-PASSWORD}';
```

- By default, the reminder value is set to **`20`** minutes.
- If you want to change the reminder time, you can do it from `content.js`.

```javascript
window.onload = () => {
  startCountdown({min});
};
```

#### Conclusion...
1. Although I created it for personal use (because I don't trust public extensions), I decided to upload it for future updates or anything.
2. If you want to add anything, feel free to create a pull request.
