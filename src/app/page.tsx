import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import HomePage from "@/components/HomePage";
import SiteChrome from "@/components/SiteChrome";
import { SITE_LIVE } from "@/lib/site";

export const metadata: Metadata = SITE_LIVE ? {} : { title: { absolute: "Oxford India Dialogue — Coming soon" } };

export default function Page() {
  return SITE_LIVE ? (
    <SiteChrome>
      <HomePage />
    </SiteChrome>
  ) : (
    <ComingSoon />
  );
}
