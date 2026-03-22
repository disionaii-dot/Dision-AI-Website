# 🚀 Deployment Checklist - Dision AI Website

## Pre-Deployment Checks

### ✅ Step 1: Local Testing
- [ ] Run `npm install` or `pnpm install`
- [ ] Run `npm run dev` 
- [ ] Open http://localhost:5173
- [ ] Test all functionality:
  - [ ] Click "Book Free Demo" in Hero (should scroll to form)
  - [ ] Click "Book Demo" in Navbar (should scroll to form)
  - [ ] Fill out contact form
  - [ ] Submit form (should open WhatsApp)
  - [ ] Click WhatsApp floating button
  - [ ] Open Privacy Policy modal
  - [ ] Open Terms & Conditions modal
  - [ ] Open About modal
  - [ ] Test on mobile view (DevTools)
  - [ ] Test on tablet view (DevTools)

### ✅ Step 2: Customization (Optional)
- [ ] Update WhatsApp number if needed
  - Search: `917481952818`
  - Files: ContactForm.tsx, WhatsAppButton.tsx, Hero.tsx, Navbar.tsx, Footer.tsx
- [ ] Update email if needed
  - Search: `disionaii@gmail.com`
  - Files: Modals and Footer
- [ ] Update company name if needed
  - Search: `Dision AI`
- [ ] Update colors if needed
  - Search: `#2563EB` and `#3B82F6`

### ✅ Step 3: Content Review
- [ ] Check all text for spelling/grammar
- [ ] Verify contact information is correct
- [ ] Review Privacy Policy content
- [ ] Review Terms & Conditions content
- [ ] Review About page content
- [ ] Check pricing information
- [ ] Verify testimonials

### ✅ Step 4: Build for Production
- [ ] Run `npm run build` or `pnpm build`
- [ ] Check for any build errors
- [ ] Verify `/dist` folder was created
- [ ] Check dist folder size (should be < 5MB)

### ✅ Step 5: Production Testing
- [ ] Test built version locally:
  ```bash
  npx vite preview
  ```
- [ ] Open preview URL
- [ ] Test all features again on built version
- [ ] Check for console errors

---

## Deployment Options

### Option A: Vercel (Recommended - Easiest)

#### Setup
1. [ ] Create account at https://vercel.com
2. [ ] Install Vercel CLI: `npm i -g vercel`
3. [ ] Run: `vercel`
4. [ ] Follow prompts

#### Configuration
- [ ] Project name: `dision-ai`
- [ ] Framework: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`

#### Custom Domain (Optional)
- [ ] Add custom domain in Vercel dashboard
- [ ] Update DNS records at domain registrar
- [ ] Wait for DNS propagation (5-60 minutes)
- [ ] Enable SSL (automatic)

#### Post-Deployment
- [ ] Visit your Vercel URL
- [ ] Test all functionality
- [ ] Check mobile responsiveness
- [ ] Verify WhatsApp links work
- [ ] Test form submission

---

### Option B: Netlify

#### Setup
1. [ ] Create account at https://netlify.com
2. [ ] Drag and drop `/dist` folder to Netlify dashboard
   OR
3. [ ] Connect GitHub repository

#### Configuration
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Production branch: `main`

#### Custom Domain (Optional)
- [ ] Add custom domain in settings
- [ ] Update DNS records
- [ ] Enable HTTPS

#### Post-Deployment
- [ ] Visit your Netlify URL
- [ ] Run full test suite
- [ ] Check all links
- [ ] Verify form functionality

---

### Option C: Cloudflare Pages

#### Setup
1. [ ] Create Cloudflare account
2. [ ] Go to Pages
3. [ ] Connect GitHub or upload `/dist`

#### Configuration
- [ ] Framework: Vite
- [ ] Build command: `npm run build`
- [ ] Build output: `dist`

#### Post-Deployment
- [ ] Test site
- [ ] Enable Web Analytics (optional)
- [ ] Configure caching

---

### Option D: Traditional Web Hosting

#### Build Locally
1. [ ] Run `npm run build`
2. [ ] Zip the `/dist` folder

#### Upload
1. [ ] Connect via FTP/SFTP or cPanel
2. [ ] Upload contents of `/dist` to public_html or www
3. [ ] Set permissions (755 for folders, 644 for files)

#### Post-Upload
- [ ] Visit your domain
- [ ] Test all functionality
- [ ] Check .htaccess if needed for SPA routing

---

## Post-Deployment Checklist

### ✅ Functionality Test
- [ ] Home page loads correctly
- [ ] All sections visible
- [ ] Images load properly
- [ ] Scroll-to-form works
- [ ] Contact form works
- [ ] WhatsApp button visible and working
- [ ] All modals open/close correctly
- [ ] Mobile menu works
- [ ] All links functional

### ✅ Performance Test
- [ ] Page loads in < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Smooth animations

### ✅ Mobile Test
- [ ] Test on real iPhone
- [ ] Test on real Android
- [ ] WhatsApp button positioned correctly
- [ ] Form usable on mobile
- [ ] Text readable without zoom

### ✅ Cross-Browser Test
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Mobile Chrome

### ✅ SEO Setup (Optional)
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Add robots.txt

---

## Analytics Setup (Optional)

### Google Analytics
1. [ ] Create GA4 property
2. [ ] Get tracking ID
3. [ ] Add to index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel (Optional)
1. [ ] Create Facebook Pixel
2. [ ] Add pixel code to index.html

### Hotjar (Optional)
1. [ ] Create Hotjar account
2. [ ] Add tracking code

---

## Maintenance Checklist

### Daily
- [ ] Check WhatsApp for new leads
- [ ] Monitor uptime
- [ ] Check for form submissions

### Weekly
- [ ] Review analytics
- [ ] Check for broken links
- [ ] Monitor performance

### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Review and update content
- [ ] Backup website files
- [ ] Check SSL certificate

### Quarterly
- [ ] Review privacy policy
- [ ] Update terms if needed
- [ ] Refresh testimonials
- [ ] Update pricing if changed

---

## Troubleshooting

### Issue: Build Fails
**Solution:**
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build`

### Issue: WhatsApp Links Don't Work
**Solution:**
1. Check phone number format (no spaces, include country code)
2. Test on actual mobile device
3. Verify URL encoding in ContactForm.tsx

### Issue: Form Doesn't Submit
**Solution:**
1. Check browser console for errors
2. Verify all required fields
3. Test in different browser
4. Check JavaScript is enabled

### Issue: Modals Don't Open
**Solution:**
1. Check browser console
2. Verify Radix UI installed correctly
3. Check z-index conflicts

### Issue: Slow Performance
**Solution:**
1. Enable caching
2. Compress images
3. Use CDN for assets
4. Minify CSS/JS (done automatically in build)

### Issue: Mobile Layout Broken
**Solution:**
1. Check viewport meta tag
2. Test in DevTools
3. Verify Tailwind responsive classes
4. Check for fixed widths

---

## Emergency Rollback Plan

If deployment breaks something:

1. [ ] Keep backup of previous version
2. [ ] Redeploy previous `/dist` folder
3. [ ] Check DNS/domain settings
4. [ ] Contact hosting support if needed

---

## Success Criteria

Your deployment is successful when:
✅ All pages load without errors
✅ Form submissions reach WhatsApp
✅ All buttons and links work
✅ Site is responsive on all devices
✅ No console errors
✅ Performance is good (< 3s load)
✅ SSL is enabled (https://)
✅ Analytics tracking (if setup)

---

## Launch Day Tasks

### Pre-Launch
- [ ] Final content review
- [ ] Final functionality test
- [ ] Backup old site (if replacing)
- [ ] Schedule deployment time

### Launch
- [ ] Deploy to production
- [ ] Update DNS (if needed)
- [ ] Test immediately after deployment
- [ ] Monitor for first 30 minutes

### Post-Launch
- [ ] Announce on social media
- [ ] Send to email list
- [ ] Monitor for issues
- [ ] Respond to first leads quickly

---

## Support Resources

### Documentation
- EXPORT_GUIDE.md - Setup instructions
- CODE_EXPORT.md - Complete file list
- COMPONENT_REFERENCE.md - Component details
- FINAL_SUMMARY.md - Project overview

### Help
- Vite Docs: https://vitejs.dev
- Tailwind Docs: https://tailwindcss.com
- React Docs: https://react.dev
- Radix UI Docs: https://radix-ui.com

### Contact
- Email: disionaii@gmail.com
- WhatsApp: +91 7481952818

---

## 🎉 Ready to Launch!

Once all checkboxes are complete, you're ready to go live!

**Good luck with your launch!** 🚀

---

*Last Updated: March 22, 2026*
