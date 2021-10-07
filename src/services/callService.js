import HttpRequest from "./api"

const httpRequest = new HttpRequest({})

export const ViewFeed = async () => await httpRequest.get("/api/v1/feed?page={page}");
export const CreateFeed = async () => await httpRequest.get("/api/v1/feed/create");
/*export const UpdateFeed = async () => await httpRequest.get("/api/v1/feed?page={page}"); */
export const DetailFeed = async () => await httpRequest.get("/api/v1/feed/viewpost?feedId={feedId}");
