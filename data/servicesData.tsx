
import React from 'react';

export interface ServiceInfo {
  slug: string;
  title: string;
  excerpt: string;
  icon: React.ReactNode;
}

const ResidentialIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>;
const CommercialIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>;
const PumpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.21 1.002l-1.5 2.25a2.25 2.25 0 01-1.89.98h-2.15a2.25 2.25 0 01-2.25-2.25v-2.141A2.25 2.25 0 013.369 9l2.25-2.25a2.25 2.25 0 011.591-.659h2.25a2.25 2.25 0 012.25 2.25v6.429m-6-3.857h.008v.008H9.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 0h.008v.008h-.008v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 9.75l.425 1.275a2.25 2.25 0 002.125 1.475h1.4c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.4a2.25 2.25 0 00-2.125 1.475L12.75 18.75m0-9l.425-1.275a2.25 2.25 0 012.125-1.475h1.4c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.4a2.25 2.25 0 01-2.125-1.475L12.75 9.75z" /></svg>;
const MaintenanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.527-1.042.21-2.35-.852-2.877l-2.212-.802a4.5 4.5 0 00-4.756 2.05l-1.738 3.466c-.194.386-.194.824 0 1.21l2.212 4.424c.122.242.3.448.512.607l3.536 2.496c.212.15.47.224.726.224h2.212c.256 0 .514-.074.726-.224l2.496-1.752M11.42 15.17l-3.03-2.496" /></svg>;
const ConsultationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>;
const BatteryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6.375A2.25 2.25 0 0018.75 3h-15A2.25 2.25 0 001.5 5.25v6.375A2.25 2.25 0 003.75 18z" /></svg>;
const FinancingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-9 12.75h9m-9 3.375h9m-9.75-1.125V10.5a3.75 3.75 0 10-7.5 0v4.875c0 .621.504 1.125 1.125 1.125h4.5" /></svg>;
const LightingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-4.5 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


export const serviceInfoList: ServiceInfo[] = [
    {
        slug: 'residential-solar',
        title: 'Residential Solar',
        excerpt: 'Custom solar solutions for homes to reduce electricity bills and your carbon footprint.',
        icon: <ResidentialIcon />
    },
    {
        slug: 'commercial-industrial',
        title: 'Commercial & Industrial',
        excerpt: 'Powering businesses and industries with reliable and cost-effective solar energy.',
        icon: <CommercialIcon />
    },
    {
        slug: 'solar-water-pumps',
        title: 'Solar Water Pumps',
        excerpt: 'Efficient solar pumps for agriculture and domestic use, ideal for remote areas.',
        icon: <PumpIcon />
    },
    {
        slug: 'system-maintenance',
        title: 'System Maintenance',
        excerpt: 'Proactive maintenance and advanced monitoring to ensure your system performs optimally.',
        icon: <MaintenanceIcon />
    },
    {
        slug: 'energy-consultation',
        title: 'Energy Consultation',
        excerpt: 'We analyze your energy usage to design a system that maximizes savings and ROI.',
        icon: <ConsultationIcon />
    },
    {
        slug: 'battery-storage',
        title: 'Battery Storage',
        excerpt: 'Gain energy independence with battery solutions that provide power during outages.',
        icon: <BatteryIcon />
    },
    {
        slug: 'solar-financing',
        title: 'Solar Financing Support',
        excerpt: 'We assist with easy financing options to make your transition to solar smooth and affordable.',
        icon: <FinancingIcon />
    },
    {
        slug: 'solar-lighting',
        title: 'Solar Lighting',
        excerpt: 'Brighten your spaces with our cost-effective and sustainable solar lighting alternatives.',
        icon: <LightingIcon />
    },
];
