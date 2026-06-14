import type { Metadata } from 'next';
import Privacy from '@/components/sections/Privacy';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'How Hack[AI]Thon 2.0 2026 collects, uses, and protects your information when you register or visit the site.',
    alternates: { canonical: '/privacy' },
};

export default function Page() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Privacy', url: '/privacy' },
                ]}
            />
            <Privacy />
        </>
    );
}
