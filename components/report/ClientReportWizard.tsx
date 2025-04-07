'use client';

import dynamic from 'next/dynamic';

// Import the component dynamically with ssr: false
const ReportWizard = dynamic(
  () => import('@/components/report/ReportWizard').then(mod => mod.ReportWizard),
  { ssr: false }
);

export function ClientReportWizard() {
  return <ReportWizard />;
}