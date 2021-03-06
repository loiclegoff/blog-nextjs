import * as playwright from "playwright-aws-lambda";
import { NextApiRequest, NextApiResponse } from "next";
import { config } from "../../config";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await playwright.launchChromium();

  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  });

  const title = req.query["title"];
  const url = `https://${config.domain}/og?title=${title}`;
  await page.goto(url, {
    timeout: 15 * 1000,
  });
  const data = await page.screenshot({
    type: "png",
  });
  await browser.close();

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");

  res.end(data);
};
