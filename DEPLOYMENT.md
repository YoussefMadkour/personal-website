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

1. Go to your project dashboard in Vercel
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your domain: `executionedge.io`
5. Vercel will show you DNS configuration instructions

### DNS Configuration

You'll need to add these DNS records to your domain registrar (where you bought executionedge.io):

**Option 1: A Record (Recommended)**
- Type: `A`
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

**Option 2: CNAME Record (Easier)**
- Type: `CNAME`
- Name: `@` (or `www`)
- Value: `cname.vercel-dns.com` (Vercel will provide exact value)

**Option 3: Nameservers (Best for full control)**
- Change your domain's nameservers to Vercel's:
  - Vercel will provide nameserver addresses in the dashboard

6. After adding DNS records, wait 5-60 minutes for propagation
7. Vercel will automatically detect and configure SSL certificates
8. Your site will be live at `https://executionedge.io`

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
