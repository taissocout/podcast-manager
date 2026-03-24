import { IncomingMessage, ServerResponse } from "http";
import { URL } from "url";
import {
  listEpisodesService,
  filterEpisodesByPodcastNameService,
} from "../services/podcast.service";

const CONTENT_TYPE_JSON = "Content-Type";
const APPLICATION_JSON = "application/json";

export const listEpisodesController = (
  _req: IncomingMessage,
  res: ServerResponse
): void => {
  const { statusCode, body } = listEpisodesService();
  res.writeHead(statusCode, { [CONTENT_TYPE_JSON]: APPLICATION_JSON });
  res.end(JSON.stringify(body));
};

export const filterEpisodesByPodcastNameController = (
  req: IncomingMessage,
  res: ServerResponse
): void => {
  const baseUrl = `http://${req.headers.host ?? "localhost"}`;
  const url = new URL(req.url ?? "", baseUrl);
  const podcastName = url.searchParams.get("podcastName") ?? undefined;
  const { statusCode, body } = filterEpisodesByPodcastNameService(podcastName);
  res.writeHead(statusCode, { [CONTENT_TYPE_JSON]: APPLICATION_JSON });
  res.end(JSON.stringify(body));
};
