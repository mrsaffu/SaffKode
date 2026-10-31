
import bmshero from '../../../assets/projects/boothmanagement/BMS-Dashboard.png';

import bmsDashboard from '../../../assets/projects/boothmanagement/bmsdashbord0.jpg';
import bmsGeography from '../../../assets/projects/boothmanagement/BMS-geography.jpg';
import bmsMembers from '../../../assets/projects/boothmanagement/BMS-membermanagement.jpg';
import bmsRoles from '../../../assets/projects/boothmanagement/BMS-role.jpg';
import bmscomb from '../../../assets/projects/boothmanagement/BTM-combine.png';


import academyDashboard from '../../../assets/projects/boothmanagement/BMS-Dashboard.png';
import academyAcademics from '../../../assets/projects/boothmanagement/BMS-Dashboard.png';
import academyAdmissions from '../../../assets/projects/boothmanagement/BMS-Dashboard.png';
import academyGallery from '../../../assets/projects/boothmanagement/BMS-Dashboard.png';

const projectImages = {
    'booth-management-system': {
        hero: bmshero,
        screenshots: [
            {
                title: 'Dashboard',
                image: bmsDashboard,
                alt: 'Booth Management System dashboard',
            },
            {
                title: 'Geography Management',
                image: bmsGeography,
                alt: 'Geography hierarchy management',
            },
            {
                title: 'Member Management',
                image: bmsMembers,
                alt: 'Member management interface',
            },
            {
                title: 'Role & Permissions',
                image: bmsRoles,
                alt: 'Role-based access and permissions',
            },
            {
                title: 'BMS Management Suite',
                image: bmscomb,
                alt: 'Booth Management System featuring booth and panchayat management, administrative hierarchy, and role-based access control',
            },
        ],
    },

    'al-qalam-academy-web-application': {
        hero: academyDashboard,
        screenshots: [
            {
                title: 'Dashboard',
                image: academyDashboard,
                alt: 'Al-Qalam Academy homepage',
            },
            {
                title: 'Academic Information',
                image: academyAcademics,
                alt: 'Academic programs and curriculum',
            },
            {
                title: 'Faculty & Admissions',
                image: academyAdmissions,
                alt: 'Faculty and admissions interface',
            },
            {
                title: 'Events & Gallery',
                image: academyGallery,
                alt: 'School events and campus gallery',
            },
        ],
    },
};

export default projectImages;
