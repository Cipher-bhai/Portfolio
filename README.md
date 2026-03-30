# 💻  CIPHER PORTFOLIO

A professional cybersecurity-themed portfolio website with terminal aesthetics, matrix rain background, and command-line interface design.

<a href="https://cipher-bhai.github.io/Portfolio/" target="_blank">Click to View live Portfolio Website</a>

## 🎯 FEATURES

### ✨ Design & Theme
- **Blackhat Hacker Theme** - Terminal/command-line aesthetics
- **Matrix Rain Background** - Animated falling code effect
- **Glitch Effects** - Cyberpunk-style text animations
- **Terminal Windows** - All content in terminal-style containers
- **Scan Line Effect** - Old CRT monitor effect
- **Cursor Glow** - Interactive mouse trail
- **Boot Screen** - System initialization on load

### 📋 Sections
1. **Home** - Hero section with typing animation
2. **About** - Professional bio with stats
3. **Experience** - Timeline with your 3 internships:
   - NIELIT (MeitY) - AI/ML (Feb 2026 - Present)
   - C-DAC Noida - Cybersecurity (June-July 2024)
   - Softpro India - Django Development (2023)
4. **Skills** - 6 categories with progress bars
5. **Projects** - 6 featured projects with tech tags
6. **Certifications** - Professional credentials
7. **Contact** - Working email form with EmailJS

### 🚀 Functionality
- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Email Contact Form** - Direct to your inbox via EmailJS
- ✅ **Resume Download** - Generates downloadable resume
- ✅ **Smooth Scrolling** - Seamless navigation
- ✅ **Scroll Animations** - Elements fade in on scroll
- ✅ **Console Commands** - Interactive developer console
- ✅ **Easter Egg** - Type "matrix" for special mode

## 📁 PROJECT STRUCTURE

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # All styling (blackhat theme)
├── script.js           # JavaScript functionality
├── DEPLOYMENT_GUIDE.md # Detailed deployment instructions
└── README.md           # This file
```

## 🛠️ QUICK START

### 1. Download Files
Download these 3 files to your computer:
- `index.html`
- `style.css`  
- `script.js`

### 2. Update Personal Information

**In `index.html`:**
- Line 68: Replace "YOUR NAME" with your actual name
- Line 387-405: Update contact information
- Line 450-1000: Update experience, projects, certifications
- All social links (GitHub, LinkedIn, Twitter)

**In `script.js`:**
- Line 303: Add EmailJS Public Key
- Line 329: Add your email address
- Line 333: Add EmailJS Service ID
- Line 334: Add EmailJS Template ID

### 3. Test Locally
1. Open `index.html` in your browser
2. Check all sections display correctly
3. Test navigation menu
4. Try the contact form

### 4. Deploy Online
See `DEPLOYMENT_GUIDE.md` for detailed instructions.

**Recommended: GitHub Pages (Free)**
1. Create GitHub account
2. Create repository: `yourusername.github.io`
3. Upload your 3 files
4. Enable GitHub Pages in settings
5. Live at: `https://yourusername.github.io`

## 📧 EMAILJS SETUP (Contact Form)

### Quick Setup (5 minutes)

1. **Create Account:** [emailjs.com](https://www.emailjs.com/) (Free)

2. **Add Email Service:**
   - Dashboard → Email Services → Add New Service
   - Connect your Gmail/Outlook/Yahoo
   - Copy your **SERVICE ID**

3. **Create Template:**
   - Dashboard → Email Templates → Create New
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
   - Copy your **TEMPLATE ID**

4. **Get Public Key:**
   - Dashboard → Account → General
   - Copy your **PUBLIC KEY**

5. **Update script.js:**
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY');        // Line 303
   
   emailjs.send(
       'YOUR_SERVICE_ID',                  // Line 333
       'YOUR_TEMPLATE_ID',                 // Line 334
       templateParams
   );
   
   to_email: 'your.actual.email@gmail.com' // Line 329
   ```

6. **Test:** Fill out contact form and submit!

**Full guide:** See `DEPLOYMENT_GUIDE.md`

## 🌐 FREE HOSTING OPTIONS

| Platform | URL Format | Pros | Setup Time |
|----------|-----------|------|------------|
| **GitHub Pages** | `username.github.io` | Free, fast, reliable | 5 mins |
| **Netlify** | `yourname.netlify.app` | Drag & drop, easy | 2 mins |
| **Vercel** | `project.vercel.app` | Fast, automatic | 3 mins |
| **Render** | `site.onrender.com` | Simple, free SSL | 5 mins |

**See `DEPLOYMENT_GUIDE.md` for step-by-step instructions!**

## 🎨 CUSTOMIZATION

### Change Colors
Edit `style.css` (lines 13-30):
```css
:root {
    --primary: #00ff00;      /* Main green color */
    --secondary: #00ff41;    /* Secondary green */
    --accent: #39ff14;       /* Accent color */
}
```

### Add Your Photo
Replace ASCII art in About section:
```html
<!-- Replace lines 450-460 with: -->
<img src="your-photo.jpg" alt="Profile" style="width: 250px; border-radius: 20px;">
```

### Modify Sections
Each section is clearly marked in `index.html`:
```html
<section id="about">
    <!-- About content -->
</section>
```

## 💡 CONSOLE COMMANDS

Open browser console (F12) and try these:

```javascript
help()       // List all commands
about()      // Show info about portfolio
skills()     // Display technical skills
projects()   // List projects
contact()    // Show contact info
download()   // Download resume
```

**Easter Egg:** Type "matrix" letter by letter anywhere on the page!

## 📱 RESPONSIVE DESIGN

Fully responsive for all devices:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1400px+)

## 🔧 TROUBLESHOOTING

### Contact Form Not Working
- ✅ Check EmailJS credentials in `script.js`
- ✅ Verify all IDs match EmailJS dashboard
- ✅ Check browser console for errors (F12)
- ✅ Make sure EmailJS script is loaded in `index.html`

### Styles Not Loading
- ✅ Ensure all 3 files are in same folder
- ✅ Check file names match exactly
- ✅ Clear browser cache (Ctrl+Shift+R)

### Matrix Background Not Showing
- ✅ Refresh page
- ✅ Check JavaScript console for errors
- ✅ Ensure script.js is loaded

### GitHub Pages Not Updating
- ✅ Wait 2-5 minutes for changes
- ✅ Clear browser cache
- ✅ Check Actions tab for build status

## 🔒 YOUR ACTUAL EXPERIENCE

This portfolio showcases your real internships:

### 1. NIELIT (MeitY) - Current
**Position:** Work-Based Learning (WBL) Intern - AI/ML  
**Duration:** February 2026 - Present  
**Location:** Lucknow, India  
**Focus:** Artificial Intelligence & Machine Learning

### 2. C-DAC Noida
**Position:** Cybersecurity Intern  
**Duration:** June 2024 - July 2024  
**Location:** Remote  
**Project:** Firewall System for detecting and blocking unauthorized IPs

### 3. Softpro India
**Position:** Python Django Developer  
**Duration:** 2023  
**Location:** Lucknow, India  
**Focus:** Web application development with Django

## 📚 TECHNOLOGIES USED

### Frontend
- HTML5
- CSS3 (Custom animations)
- JavaScript (ES6+)
- Font Awesome Icons

### Libraries
- EmailJS (Contact form)
- No frameworks (Pure vanilla JS)

### Design
- Terminal/Command-line aesthetics
- Matrix rain animation
- Glitch effects
- Retro CRT monitor styling

## 🎯 TARGET AUDIENCE

Perfect for:
- Cybersecurity professionals
- Ethical hackers
- Penetration testers
- Security researchers
- Full-stack developers with security focus
- AI/ML enthusiasts
- Anyone wanting a unique portfolio

## 📈 PERFORMANCE

- ⚡ Fast loading (< 2 seconds)
- 📦 Lightweight (< 100KB total)
- 🎨 Pure CSS animations (no heavy libraries)
- 🚀 Optimized for speed
- 📱 Mobile-first responsive

## 🤝 CONTRIBUTION

Want to improve this portfolio?

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 LICENSE

MIT License - Feel free to use this for your own portfolio!

## 🔗 USEFUL LINKS

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub Pages Guide](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 🆘 NEED HELP?

1. Check `DEPLOYMENT_GUIDE.md` for detailed instructions
2. Google your specific error message
3. Check browser console (F12) for errors
4. Verify all files are in the same folder
5. Make sure EmailJS credentials are correct

## ✅ PRE-DEPLOYMENT CHECKLIST

Before deploying, make sure you've:

- [ ] Updated your name everywhere
- [ ] Changed all email addresses
- [ ] Updated phone number
- [ ] Configured EmailJS (Service ID, Template ID, Public Key)
- [ ] Updated social media links (GitHub, LinkedIn, Twitter)
- [ ] Added your real projects and descriptions
- [ ] Updated skills to match your actual expertise
- [ ] Added your certifications
- [ ] Tested contact form locally
- [ ] Checked mobile responsiveness
- [ ] Tested all navigation links
- [ ] Downloaded and customized resume

## 🎉 READY TO DEPLOY!

Once everything is updated and tested:

1. Choose hosting platform (GitHub Pages recommended)
2. Follow deployment steps in `DEPLOYMENT_GUIDE.md`
3. Test your live website
4. Share with the world!

**Your portfolio URL will be:**
- GitHub Pages: `https://yourusername.github.io`
- Netlify: `https://yourname.netlify.app`
- Vercel: `https://yourproject.vercel.app`
- Custom domain: `https://yourname.tk` (or .ml, .ga, .cf, .gq)

---

## 📬 CONTACT

Created with 💚 by the Blackhat Portfolio System

**Questions?** Check the deployment guide or reach out!

---

```
 ██████╗ ██╗      █████╗  ██████╗██╗  ██╗██╗  ██╗ █████╗ ████████╗
 ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝██║  ██║██╔══██╗╚══██╔══╝
 ██████╔╝██║     ███████║██║     █████╔╝ ███████║███████║   ██║   
 ██╔══██╗██║     ██╔══██║██║     ██╔═██╗ ██╔══██║██╔══██║   ██║   
 ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗██║  ██║██║  ██║   ██║   
 ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
                                                                     
             [ PORTFOLIO SYSTEM v1.0 - OPERATIONAL ]
```

**Made with ❤️ and lots of ☕**