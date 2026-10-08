/**
 * Build and upload `dist/` to an S3 bucket (AWS CLI required).
 *
 * S3 bucket (Static website hosting):
 *   - Index document: index.html
 *   - Error document: index.html   ← required for /privacy-policy etc. without CloudFront
 *
 * Env: AWS_S3_BUCKET (required), AWS_REGION (optional), AWS_CLOUDFRONT_DISTRIBUTION_ID (optional)
 */

import { execSync } from 'node:child_process';
import { config } from 'dotenv';

config({ path: '.env.local' });
config({ path: '.env' });

const bucket = process.env.AWS_S3_BUCKET?.trim();
const region = process.env.AWS_REGION?.trim();
const distributionId = process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID?.trim();

if (!bucket) {
  console.error('Missing AWS_S3_BUCKET. Set it in .env.local or your shell.');
  process.exit(1);
}

const regionFlag = region ? `--region ${region}` : '';

console.log('Building…');
execSync('npm run build', { stdio: 'inherit', shell: true });

console.log(`Syncing dist/ → s3://${bucket}/ …`);
execSync(`aws s3 sync dist/ s3://${bucket}/ --delete ${regionFlag}`, {
  stdio: 'inherit',
  shell: true,
});

console.log('Setting short cache on HTML entry…');
execSync(
  `aws s3 cp dist/index.html s3://${bucket}/index.html --cache-control "public,max-age=0,must-revalidate" ${regionFlag}`,
  { stdio: 'inherit', shell: true },
);

if (distributionId) {
  console.log(`Invalidating CloudFront ${distributionId}…`);
  execSync(
    `aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`,
    { stdio: 'inherit', shell: true },
  );
}

console.log('Done. Use the S3 website endpoint or your custom domain.');
