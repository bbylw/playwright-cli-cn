import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// GitHub Pages serves this project site under /playwright-cli-cn/.
// Set NEXT_PUBLIC_BASE_PATH at build time (see .github/workflows/deploy.yml).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  basePath,
  images: {
    // Static export has no image optimization server.
    unoptimized: true,
  },
};

export default withMDX(config);