import { PodcastModel } from "../models/podcast.model";
import { podcastRepository } from "../repositories/podcast.repository";

interface ServiceResponse {
  statusCode: number;
  body: PodcastModel[];
}

const HTTP_OK = 200;
const HTTP_NO_CONTENT = 204;

export const listEpisodesService = (): ServiceResponse => {
  const episodes = podcastRepository;
  if (episodes.length === 0) {
    return { statusCode: HTTP_NO_CONTENT, body: [] };
  }
  return { statusCode: HTTP_OK, body: episodes };
};

export const filterEpisodesByPodcastNameService = (
  podcastName: string | undefined
): ServiceResponse => {
  if (!podcastName || podcastName.trim() === "") {
    return { statusCode: HTTP_NO_CONTENT, body: [] };
  }
  const sanitized = podcastName.trim().toLowerCase();
  const filtered = podcastRepository.filter((podcast) =>
    podcast.podcastName.toLowerCase().includes(sanitized)
  );
  if (filtered.length === 0) {
    return { statusCode: HTTP_NO_CONTENT, body: [] };
  }
  return { statusCode: HTTP_OK, body: filtered };
};
