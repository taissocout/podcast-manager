export enum PodcastCategory {
  HEALTH = "health",
  SPORT = "sport",
  BODYBUILDER = "bodybuilder",
  MINDSET = "mindset",
  HUMOR = "humor",
  RACING = "racing",
  TECHNOLOGY = "technology",
  BUSINESS = "business",
}

export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  cover: string;
  link: string;
  categories: PodcastCategory[];
}
