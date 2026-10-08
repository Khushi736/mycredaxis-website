# Deploy mycredaxis.com (S3 + optional CloudFront)

The site code uses **path URLs** (`/privacy-policy`, not `/#privacy-policy`).  
If the live site still shows `#` in the address bar, **S3 is serving an old build** — not a missing code fix.

## Check live vs latest build

Open view-source on https://www.mycredaxis.com/

- **Old (broken routing):** `/assets/index-L3A3jVUP.js`, no inline `replaceState` script in `<body>`.
- **New (correct):** a different `index-*.js` hash, and a small `<script>` before `#root` that calls `history.replaceState`.

## One-time AWS setup

### 1. S3 bucket

1. Create or use your static bucket (same one behind mycredaxis.com).
2. **Properties → Static website hosting:** Enable.
3. **Index document:** `index.html`
4. **Error document:** `index.html` (required for direct links like `/privacy-policy` when **not** using CloudFront custom errors).
5. **Permissions:** public read on objects (see `bucket-policy.example.json` — replace bucket name).

### 2. CloudFront (if www.mycredaxis.com uses it)

Most custom domains use CloudFront in front of S3.

1. **Error pages:** create custom error responses:
   - **403** → response page `/index.html`, HTTP response **200**
   - **404** → response page `/index.html`, HTTP response **200**
2. After every deploy, **invalidate** `/*` (or set `AWS_CLOUDFRONT_DISTRIBUTION_ID` in CI).

### 3. DNS

Point `mycredaxis.com` / `www.mycredaxis.com` to the CloudFront distribution or S3 website endpoint (whatever you use today).

## Deploy latest build

### Option A — GitHub Actions (recommended)

Add these **repository secrets** (Settings → Secrets → Actions):

| Secret | Example |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM user key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_S3_BUCKET` | your bucket name |
| `AWS_REGION` | e.g. `ap-south-1` |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | optional, e.g. `E1234ABCDEF` |

IAM user needs at least: `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on the bucket, and `cloudfront:CreateInvalidation` if using CloudFront.

Push to `main` or run workflow **Deploy to AWS S3** manually.

### Option B — Local (AWS CLI installed)

```bash
# .env.local
AWS_S3_BUCKET=your-bucket-name
AWS_REGION=ap-south-1
AWS_CLOUDFRONT_DISTRIBUTION_ID=E1234567890   # if applicable

npm run deploy:s3
```

## After deploy

1. Hard refresh or incognito: https://www.mycredaxis.com/privacy-policy  
2. URL should stay `/privacy-policy` (no `#`).
3. Footer **Privacy Policy** should navigate to the same path.
