"use client";

import { useMemo, useState } from "react";

export const TITLE_LIMIT = 60;
export const DESCRIPTION_LIMIT = 160;

export function useMetaGenerator() {
  const [brandName, setBrandName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [description, setDescription] = useState("");
  const [pageType, setPageType] = useState("Tool");

  const seoTitle = useMemo(() => {
    if (!primaryKeyword.trim()) return "";

    let title = "";

    switch (pageType) {
      case "Homepage":
        title = `${primaryKeyword} | ${brandName}`;
        break;

      case "Blog":
        title = `${primaryKeyword} Guide | ${brandName}`;
        break;

      case "Service":
        title = `${primaryKeyword} Services | ${brandName}`;
        break;

      case "Product":
        title = `Buy ${primaryKeyword} | ${brandName}`;
        break;

      case "Category":
        title = `Best ${primaryKeyword} | ${brandName}`;
        break;

      default:
        title = `Free ${primaryKeyword} | ${brandName}`;
    }

    return title.trim();
  }, [brandName, primaryKeyword, pageType]);

  const metaDescription = useMemo(() => {
    if (!description.trim()) return "";

    let text = description.trim();

    if (brandName && !text.includes(brandName)) {
      text += ` ${brandName}.`;
    }

    return text;
  }, [description, brandName]);

  const canonicalUrl = useMemo(() => {
    if (!websiteUrl) return pageUrl;

    return `${websiteUrl.replace(/\/$/, "")}/${pageUrl.replace(/^\//, "")}`;
  }, [websiteUrl, pageUrl]);

  const html = useMemo(() => {
    return `<title>${seoTitle}</title>

<meta name="description" content="${metaDescription}" />

<link rel="canonical" href="${canonicalUrl}" />

<meta property="og:title" content="${seoTitle}" />
<meta property="og:description" content="${metaDescription}" />
<meta property="og:url" content="${canonicalUrl}" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${seoTitle}" />
<meta name="twitter:description" content="${metaDescription}" />`;
  }, [seoTitle, metaDescription, canonicalUrl]);

  const titleLength = seoTitle.length;
  const descriptionLength = metaDescription.length;

  const titleRemaining = TITLE_LIMIT - titleLength;
  const descriptionRemaining =
    DESCRIPTION_LIMIT - descriptionLength;

  const titleStatus =
    titleLength === 0
      ? "Empty"
      : titleLength <= TITLE_LIMIT
      ? "Good"
      : "Too Long";

  const descriptionStatus =
    descriptionLength === 0
      ? "Empty"
      : descriptionLength <= DESCRIPTION_LIMIT
      ? "Good"
      : "Too Long";

  const score = useMemo(() => {
    let total = 0;

    if (
      titleLength >= 30 &&
      titleLength <= TITLE_LIMIT
    )
      total += 25;

    if (
      descriptionLength >= 120 &&
      descriptionLength <= DESCRIPTION_LIMIT
    )
      total += 25;

    if (brandName.trim()) total += 15;

    if (websiteUrl.trim()) total += 15;

    if (primaryKeyword.trim()) total += 20;

    return total;
  }, [
    titleLength,
    descriptionLength,
    brandName,
    websiteUrl,
    primaryKeyword,
  ]);

  function clear() {
    setBrandName("");
    setWebsiteUrl("");
    setPageUrl("");
    setPrimaryKeyword("");
    setDescription("");
    setPageType("Tool");
  }

  return {
    brandName,
    setBrandName,

    websiteUrl,
    setWebsiteUrl,

    pageUrl,
    setPageUrl,

    primaryKeyword,
    setPrimaryKeyword,

    description,
    setDescription,

    pageType,
    setPageType,

    seoTitle,
    metaDescription,

    canonicalUrl,

    html,

    score,

    titleLength,
    descriptionLength,

    titleRemaining,
    descriptionRemaining,

    titleStatus,
    descriptionStatus,

    clear,
  };
}