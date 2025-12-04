export interface SidebarLink {
    to: string;
    label: string;
    icon: string;
}

export const sidebarTopLinks: SidebarLink[] = [
    {
        to: '/trending',
        label: 'Trending',
        icon: 'ri-fire-fill',
    },
    {
        to: '/popular',
        label: 'Popular',
        icon: 'ri-bard-fill',
    },
    {
        to: '/movie',
        label: 'Movies',
        icon: 'ri-movie-2-fill',
    },
    {
        to: '/tv',
        label: 'Tv Show',
        icon: 'ri-tv-2-line',
    },
    {
        to: '/person',
        label: 'People',
        icon: 'ri-team-fill',
    },
];
