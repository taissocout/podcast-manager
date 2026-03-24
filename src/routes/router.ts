import { IncomingMessage, ServerResponse } from "http";
import {
  listEpisodesController,
  filterEpisodesByPodcastNameController,
} from "../controllers/podcast.controller";
import { Routes } from "../utils/routes.util";

export const router = (req: IncomingMessage, res: ServerResponse): void => {
  const url = req.url ?? "";
  const method = req.method ?? "";

  if (method === "GET" && url === Routes.HEALTH) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }));
    return;
  }
  if (method === "GET" && url === Routes.LIST) {
    listEpisodesController(req, res);
    return;
  }
  if (method === "GET" && url.startsWith(Routes.EPISODE)) {
    filterEpisodesByPodcastNameController(req, res);
    return;
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Route not found" }));
};
