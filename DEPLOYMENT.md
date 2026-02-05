# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your personal portfolio website to Vercel.

## Prerequisites

- ✅ GitHub account (repository already created: `YoussefMadkour/personal-website`)
- ✅ Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- ✅ Resend API key (for contact form emails)

## Step 1: Sign Up / Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** to connect your GitHub account

## Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **`YoussefMadkour/personal-website`** and click **"Import"**

## Step 3: Configure Project Settings

Vercel will auto-detect Next.js settings, but verify:

- **Framework Preset:** Next.js (should be auto-detected)
- **Root Directory:** `./` (leave as default)
- **Build Command:** `bun run build` (or leave default)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `bun install` (or leave default)

## Step 4: Add Environment Variables

**⚠️ IMPORTANT:** Add these environment variables in Vercel before deploying:

1. In the project settings, go to **"Environment Variables"**
2. Add the following variables:

   ```
   CONTACT_EMAIL=madkour.youssef@gmail.com
   RESEND_API_KEY=re_CqhiUrd3_GidDmFn72coPryJvs6mURfjT
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

3. Make sure to add them for **all environments** (Production, Preview, Development)
4. Click **"Save"**

## Step 5: Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll see a success message with your live URL!

## Step 6: Configure Custom Domain (executionedge.io)

**This is required for your deployment:**

### Part A: Add Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your domain: `executionedge.io`
5. Vercel will show you the DNS records you need to add
6. **Important:** Copy the DNS values Vercel shows you (they may differ from examples below)

### Part B: Add DNS Records at Hostinger

Since your domain is managed by Hostinger, you need to add DNS records there:

1. **Log in to Hostinger:**
   - Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Log in with your Hostinger account

2. **Navigate to DNS Management:**
   - Go to **"Domains"** → Select **"executionedge.io"**
   - Click on **"DNS / Name Servers"** or **"DNS Zone Editor"**

3. **Add DNS Records:**

   **For the root domain (executionedge.io):**
   
   **Option 1: CNAME Record (Recommended - Easiest)**
   - Click **"Add Record"** or **"Add New Record"**
   - **Type:** `CNAME`
   - **Name/Host:** `@` (or leave blank, or enter `executionedge.io`)
   - **Value/Target:** `cname.vercel-dns.com` 
     - ⚠️ **Note:** Vercel will show you the exact value in their dashboard - use that!
   - **TTL:** `3600` (or leave default)
   - Click **"Save"** or **"Add Record"**

   **Option 2: A Record (If CNAME doesn't work)**
   - Click **"Add Record"**
   - **Type:** `A`
   - **Name/Host:** `@` (or leave blank)
   - **Value/IP:** `76.76.21.21` 
     - ⚠️ **Note:** Check Vercel dashboard for the current IP address
   - **TTL:** `3600`
   - Click **"Save"**

   **For www subdomain (www.executionedge.io):**
   - Click **"Add Record"**
   - **Type:** `CNAME`
   - **Name/Host:** `www`
   - **Value/Target:** `cname.vercel-dns.com` (or value from Vercel)
   - **TTL:** `3600`
   - Click **"Save"**

4. **Verify Records:**
   - Make sure you don't have conflicting records
   - Remove any old A records pointing to other IPs (if any)
   - Keep other records (MX for email, etc.) if needed

5. **Wait for DNS Propagation:**
   - DNS changes can take 5 minutes to 48 hours
   - Usually takes 15-60 minutes
   - Check status in Vercel dashboard - it will show "Valid Configuration" when ready

6. **Vercel will automatically:**
   - Detect the DNS records
   - Configure SSL certificates (HTTPS)
   - Your site will be live at `https://executionedge.io`

### Troubleshooting DNS Issues

**If DNS doesn't propagate:**
- Double-check the values match exactly what Vercel shows
- Make sure there are no typos
- Remove any conflicting records
- Wait longer (up to 48 hours in rare cases)
- Use a DNS checker tool: [dnschecker.org](https://dnschecker.org)

**If Hostinger doesn't allow CNAME on root (@):**
- Some registrars don't allow CNAME on root domain
- Use A record instead with the IP Vercel provides
- Or use nameservers (see below)

**Alternative: Use Vercel Nameservers (Advanced)**
If you want Vercel to manage all DNS:
1. In Vercel dashboard, get the nameserver addresses
2. In Hostinger, go to **"Name Servers"**
3. Change nameservers to Vercel's (usually `ns1.vercel-dns.com`, etc.)
4. This gives Vercel full DNS control

## Post-Deployment Checklist

- [ ] Test the contact form to ensure emails are being sent
- [ ] Check all portfolio links are working
- [ ] Verify responsive design on mobile devices
- [ ] Test navigation and smooth scrolling
- [ ] Check that all images are loading correctly

## Troubleshooting

### Contact Form Not Sending Emails

1. Verify environment variables are set correctly in Vercel
2. Check Resend API key is valid and active
3. Check Vercel function logs: **Project Dashboard** → **"Functions"** → **"View Logs"**

### Build Errors

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (Vercel uses Node 18+ by default)

### Images Not Loading

1. Ensure all images are in the `public/` folder
2. Check image paths in your code match the public folder structure
3. Verify image file names match exactly (case-sensitive)

## Updating Your Site

After making changes:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Vercel will automatically detect the push and redeploy
3. You'll get a preview URL for each deployment
4. Once you're happy, merge to `main` branch for production deployment

## Useful Vercel Features

- **Preview Deployments:** Every push creates a preview URL
- **Analytics:** Enable in project settings for visitor insights
- **Speed Insights:** Get performance metrics
- **Edge Functions:** For serverless API routes (already configured)

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- Resend Docs: [resend.com/docs](https://resend.com/docs)

---

**Your site is now live! 🎉**

Your portfolio will be accessible at:
- **Primary:** `https://executionedge.io`
- **Vercel URL:** `https://your-project-name.vercel.app` (also works)
