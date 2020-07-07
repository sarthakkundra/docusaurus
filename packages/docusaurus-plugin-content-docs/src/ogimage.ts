/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import puppeteer from 'puppeteer';

export async function screenshot(
  html: string,
  page: puppeteer.Page,
): Promise<string> {
  await page.setContent(html);
  return page.screenshot();
}

export async function createPage(): Promise<puppeteer.Page> {
  const browser = await puppeteer.launch();
  return browser.newPage();
}
