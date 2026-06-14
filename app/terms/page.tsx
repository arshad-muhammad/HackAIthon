import type { Metadata } from 'next';
import Terms from '@/components/sections/Terms';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description:
        'The terms governing participation in Hack[AI]Thon 2.0 2026 and use of the Hack[AI]Thon 2.0 website.',
    alternates: { canonical: '/terms' },
};

export default function Page() {
    return (
        <>
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Terms', url: '/terms' },
                ]}
            />
            <Terms />
        </>
    );
}
