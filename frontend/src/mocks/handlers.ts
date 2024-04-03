import { HttpResponse, delay, http } from "msw";
export const handlers = [
  http.post("/api/message", async () => {
    await delay(1000);

    return HttpResponse.json({ result: "Otvet ot megamozga" });
  }),
];
