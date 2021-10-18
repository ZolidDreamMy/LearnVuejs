import HttpRequest from "./api"

const httpRequest = new HttpRequest({})

export const getMockData = async () => await httpRequest.get("/v1/bpi/currentprice.json");

export const ViewFeed = async () => await httpRequest.get("/api/v1/feed?page={page}");
export const CreateFeed = async (data) => await httpRequest.post("/api/v1/feed/create",data);
/*export const UpdateFeed = async () => await httpRequest.get("/api/v1/feed?page={page}"); */
export const DetailFeed = async () => await httpRequest.get("/api/v1/feed/viewpost?feedId={feedId}");
