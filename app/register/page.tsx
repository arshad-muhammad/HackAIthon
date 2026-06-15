import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Register for Hack[AI]Thon 2.0 2026",
  description:
    "Register your team for Hack[AI]Thon 2.0 2026 - a 24-hour national AI hackathon at VRIF VTU Belagavi, Aug 8 - 9, 2026.",
  alternates: { canonical: "/register" },
  robots: {
    // Page is just a redirect - let crawlers follow but don't index the empty body
    index: false,
    follow: true,
  },
};

export default function Register() {
  redirect(SITE.event.registerUrl);
}
