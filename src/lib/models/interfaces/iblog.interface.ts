export interface IBlog {
	slug: string;
	title: string;
	author: string;
	published: boolean;
	tags: string[];
	banner?: string;
	bannerCredit?: string;
	canonical?: string;
	date: string;
	description: string;
	edit?: string;
	modified?: string;
	readingTime: string;
}
